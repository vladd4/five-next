import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/carsSlice";
import { filtersReducer } from "./slices/filtersSlice";
import { usersReducer } from "./slices/userSlice";
import { savedReducer } from "./slices/savedSlice";
import { alertReducer } from "./slices/alertSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    users: usersReducer,
    saved: savedReducer,
    alert: alertReducer,
  },
});
