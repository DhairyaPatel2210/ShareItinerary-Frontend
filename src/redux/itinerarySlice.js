import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  addActivityReducer,
  deleteActivityReducer,
} from "./reducers/activityReducers";
import {
  addDayReducer,
  deleteDayReducer,
  updateDayReducer,
} from "./reducers/dayReducers";
import {
  updateItineraryNameReducer,
  updateItinerarySummaryReducer,
} from "./reducers/itineraryReducers";

const activityObject = {
  id: nanoid(),
  name: "",
  description: "",
  location: "",
  image: "",
};

export const dayObject = {
  id: nanoid(),
  date: "",
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
