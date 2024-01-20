import { configureStore } from "@reduxjs/toolkit";
import indicatorsReduser from "./indicatorsSlice";

export const store = configureStore({
  reducer: {
    indicators: indicatorsReduser,
  },
});
