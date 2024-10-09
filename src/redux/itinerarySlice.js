import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  addDayReducer,
  updateDayReducer,
  deleteDayReducer,
} from "./reducers/dayReducers";
import {
  updateItineraryNameReducer,
  updateItinerarySummaryReducer,
} from "./reducers/itineraryReducers";
import {
  addActivityReducer,
  deleteActivityReducer,
} from "./reducers/activityReducers";

const activityObject = {
  id: nanoid(),
  title: "",
  description: "",
  location: "",
  image: "",
};

export const dayObject = {
  id: nanoid(),
  date: null,
  activities: [activityObject],
};

const itineraryObject = {
  id: nanoid(),
  name: "",
  summary: "",
  days: [dayObject],
};

const initialState = { itineraries: [itineraryObject] };

export const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    addDay: addDayReducer,
    updateDay: updateDayReducer,
    deleteDay: deleteDayReducer,
    updateItineraryName: updateItineraryNameReducer,
    updateItinerarySummary: updateItinerarySummaryReducer,
    addActivity: addActivityReducer,
    deleteActivity: deleteActivityReducer,
  },
});

export const {
  addDay,
  updateDay,
  deleteDay,
  updateItineraryName,
  updateItinerarySummary,
  addActivity,
  deleteActivity,
} = itinerarySlice.actions;

export default itinerarySlice.reducer;
