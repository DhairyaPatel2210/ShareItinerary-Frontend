import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";
import Activity from "./Activity";
import { DatePicker } from "./ui/datepicker";

// importing redux toolkit dependencies
import {
  addActivity,
  deleteActivity,
  deleteDay,
  updateDay,
} from "@/redux/itinerarySlice";
import { useDispatch, useSelector } from "react-redux";
import { set } from "date-fns";
import { nanoid } from "@reduxjs/toolkit";

const DayDropdown = ({ itineraryId, dayId }) => {
  const globalActivites = useSelector((state) =>
    state.itineraries
      .find((i) => i.id === itineraryId)
      .days.find((d) => d.id === dayId)
      .activities.map((a) => ({ ...a, isOpen: false }))
  );

  // managing local states
  const [activities, setActivities] = useState(globalActivites);
  const [date, setDate] = useState("");

  //declaring dispatcher
  const dispatch = useDispatch();

  const updateStore = useCallback(() => {
    const newDayData = { date, activities };
    console.log(newDayData);
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
    // dispatch(addActivity({ itineraryId: itineraryId, dayId: dayId }));
    const newActivity = {
      id: nanoid(),
      title: "",
      description: "",
      location: "",
      image: "",
      isOpen: false,
    };
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  const handleSaveActivity = (id, activityData) => {
    const newActivites = activities.map((a) =>
      a.id === id ? { ...a, ...activityData } : a
    );
    setActivities(newActivites);
  };

  const handleOpenModal = (id) => {
    setActivities((prevActivities) => {
      const newActivities = prevActivities.map((activity) =>
        activity.id === id ? { ...activity, isOpen: true } : activity
      );
      return newActivities;
    });
  };

  const handleCloseModal = (id) => {
    // const newDayData = { date: date, activities: activities };
    // dispatch(
    //   updateDay({
    //     itineraryId: itineraryId,
    //     dayId: dayId,
    //     newDayData: newDayData,
    //   })
    // );
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

  return (
    <>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-2 w-full">
          <DatePicker setDate={setDate} date={date} />
          <Button onClick={handleAddActivity}>Add Activity</Button>
          {/* Use onDeleteDay prop to delete the day */}
          <Button
            variant="destructive"
            onClick={() =>
              dispatch(deleteDay({ itineraryId: itineraryId, dayId: dayId }))
            }
          >
            Delete Day
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex-shrink-0">
              <Badge
                variant="secondary"
                className="cursor-pointer"
                onClick={() => handleOpenModal(activity.id)}
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
                setActivities={setActivities}
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
