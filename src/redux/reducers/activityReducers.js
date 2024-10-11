import { nanoid } from "@reduxjs/toolkit";

export const addActivityReducer = (state, action) => {
  const { itineraryId, dayId } = action.payload;
  state.itineraries
    .find((i) => i.id === itineraryId)
    .days.find((d) => d.id === dayId)
    .activities.push({
      id: nanoid(),
      name: "",
      description: "",
      location: "",
      image: "",
    });
};

export const deleteActivityReducer = (state, action) => {
  const { itineraryId, dayId, activityId } = action.payload;
  const itineraryIndex = state.itineraries.findIndex(
    (i) => i.id === itineraryId
  );
  const dayIndex = state.itineraries[itineraryIndex].days.findIndex(
    (d) => d.id === dayId
  );
  state.itineraries[itineraryIndex].days[dayIndex].activities =
    state.itineraries[itineraryIndex].days[dayIndex].activities.filter(
      (a) => a.id !== activityId
    );
};
