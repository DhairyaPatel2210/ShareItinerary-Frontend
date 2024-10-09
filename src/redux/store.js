import { configureStore } from "@reduxjs/toolkit";
import itineraryReducer from "../redux/itinerarySlice";

export const store = configureStore({
  reducer: itineraryReducer,
});
