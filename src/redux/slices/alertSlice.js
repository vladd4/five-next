import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
  },
  extraReducers: {},
});

export const { setShowAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
