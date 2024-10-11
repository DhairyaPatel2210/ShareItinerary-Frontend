import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Activity from "./Activity";
import { DatePicker } from "./ui/datepicker";

// importing redux toolkit dependencies
import { deleteDay, updateDay } from "@/redux/itinerarySlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const DayDropdown = ({ itineraryId, dayId, deleteDayHandler }) => {
  const day = useSelector((state) =>
    state.itineraries
      .find((i) => i.id === itineraryId)
      .days.find((d) => d.id === dayId)
  );

  const globalActivites = day.activities.map((a) => ({ ...a, isOpen: false }));

  // managing local states
  const [activities, setActivities] = useState(globalActivites);
  const [date, setDate] = useState(day.date || "");

  // declaring dispatcher
  const dispatch = useDispatch();

  // logic to pass data to the redux store on close of the accordian
  const updateStore = useCallback(() => {
    const newDayData = { date: date.toString(), activities: activities };
    console.log(`Calling updateStore with DayId ${dayId}`);

    dispatch(
      updateDay({
        itineraryId: itineraryId,
        dayId: dayId,
        newDayData: newDayData,
      })
    );
  }, [date, activities, dispatch]);

  const funcRef = useRef(updateStore);

  useEffect(() => {
    funcRef.current = updateStore;
  }, [updateStore]);

  useEffect(() => {
    return () => {
      funcRef.current();
    };
  }, []);

  const handleAddActivity = () => {
    const newActivity = {
      id: nanoid(),
      name: "",
      description: "",
      location: "",
      image: "",
      isOpen: false,
    };
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  const handleSaveActivity = (id, activityData) => {
    const newActivites = activities.map((a) =>
      a.id === id ? { ...a, ...activityData, isOpen: false } : a
    );
    setActivities(newActivites);
  };

  const handleOpenModal = (event, id) => {
    setActivities((prevActivities) => {
      const newActivities = prevActivities.map((activity) =>
        activity.id === id ? { ...activity, isOpen: true } : activity
      );
      return newActivities;
    });
  };

  const handleCloseModal = (id) => {
    console.log("Closing the modal");
    setActivities((prevActivities) => {
      const newActivities = prevActivities.map((activity) =>
        activity.id === id ? { ...activity, isOpen: false } : activity
      );
      return newActivities;
    });
  };

  const handleRemoveActivity = (id) => {
    const newActivities = activities.filter((a) => a.id !== id);
    setActivities(newActivities);
  };

  const handleDeleteDay = () => {
    dispatch(deleteDay({ itineraryId: itineraryId, dayId: dayId }));
    deleteDayHandler();
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-2 w-full">
          <DatePicker
            setDate={setDate}
            date={date === "" ? date : new Date(date)}
          />
          <Button onClick={handleAddActivity}>Add Activity</Button>
          {/* Use onDeleteDay prop to delete the day */}
          <Button variant="destructive" onClick={handleDeleteDay}>
            Delete Day
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex-shrink-0">
              <Badge
                className="cursor-pointer"
                onClick={(e) => handleOpenModal(e, activity.id)}
              >
                Activity {index + 1}
                <button
                  className="ml-2 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveActivity(activity.id);
                  }}
                >
                  <Trash2 className="size-4" />
                </button>
              </Badge>
              <Activity
                index={index}
                isOpen={activity.isOpen}
                onOpenChange={() => handleCloseModal(activity.id)}
                initialData={activity}
                onSave={(data) => handleSaveActivity(activity.id, data)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DayDropdown;
