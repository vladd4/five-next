import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const data = await axios.get("http://localhost:5000/cars");
  return data.data;
});

export const fetchFilterCars = createAsyncThunk(
  "cars/fetchFilterCars",
  async (params) => {
    const data = await axios.post("http://localhost:5000/cars", params);
    return data.data;
  }
);

const initialState = {
  cars: [],
  status: "loading",
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCars.pending]: (state) => {
      state.cars = [];
      state.status = "loading";
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
      state.status = "loaded";
    },
    [fetchCars.rejected]: (state) => {
      state.cars = [];
      state.status = "loading";
    },

    [fetchFilterCars.pending]: (state) => {
      state.cars = [];
      state.status = "loading";
    },
    [fetchFilterCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
      state.status = "loaded";
    },
    [fetchFilterCars.rejected]: (state) => {
      state.cars = [];
      state.status = "loading";
    },
  },
});

export const carsReducer = carsSlice.reducer;
