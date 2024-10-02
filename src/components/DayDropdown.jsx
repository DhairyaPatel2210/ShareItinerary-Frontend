import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import Activity from "./Activity";

const DayDropdown = () => {
  const [activities, setActivities] = useState([{ id: 0, isOpen: false }]);
  const [date, setDate] = useState(new Date());

  const handleAddActivity = () => {
    setActivities([...activities, { id: activities.length, isOpen: false }]);
  };

  const handleOpenModal = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, isOpen: true } : activity
      )
    );
  };

  const handleCloseModal = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, isOpen: false } : activity
      )
    );
  };

  const handleRemoveActivity = (id) => {
    const updatedActivities = activities
      .filter((activity) => activity.id !== id)
      .map((activity, index) => ({
        ...activity,
        id: index,
      }));
    setActivities(updatedActivities);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-2 w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <Button onClick={handleAddActivity}>Add Activity</Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex-shrink-0">
              <Badge
                variant="secondary"
                className="cursor-pointer"
                onClick={() => handleOpenModal(activity.id)}
              >
                Activity {activity.id + 1}
                <button
                  className="ml-2 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveActivity(activity.id);
                  }}
                >
                  ×
                </button>
              </Badge>
              <Activity
                index={activity.id}
                isOpen={activity.isOpen}
                onOpenChange={() => handleCloseModal(activity.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DayDropdown;
