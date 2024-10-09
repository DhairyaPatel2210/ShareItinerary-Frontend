import { nanoid } from "@reduxjs/toolkit";

export const addDayReducer = (state, action) => {
  const index = state.itineraries.findIndex((i) => i.id === action.payload);
  state.itineraries[index].days.push({
    id: nanoid(),
    date: null,
    activities: [
      {
        id: nanoid(),
        title: "",
        description: "",
        location: "",
        image: "",
      },
    ],
  });
};

export const updateDayReducer = (state, action) => {
  const { itineraryId, dayId, newDayData } = action.payload;
  const itineraryIndex = state.itineraries.findIndex(
    (i) => i.id === itineraryId
  );
  const dayIndex = state.itineraries[itineraryIndex].days.findIndex(
    (d) => d.id === dayId
  );
  const currentDayData = state.itineraries[itineraryIndex].days[dayIndex];
  state.itineraries[itineraryIndex].days[dayIndex] = {
    ...currentDayData,
    ...newDayData,
  };
};

export const deleteDayReducer = (state, action) => {
  const { itineraryId, dayId } = action.payload;
  const itineraryIndex = state.itineraries.findIndex(
    (i) => i.id === itineraryId
  );
  state.itineraries[itineraryIndex].days = state.itineraries[
    itineraryIndex
  ].days.filter((d) => d.id !== dayId);
};
