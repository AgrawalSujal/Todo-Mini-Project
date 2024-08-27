import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../features/Slices/TodoSlice";

export const store = configureStore({
  reducer: todoslice,
});
