import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToSaved = createAsyncThunk(
  "saved/addToSaved",
  async (params) => {
    const data = await axios.post(`http://localhost:5000/saved/`, params);
    return data.data;
  }
);

export const fetchSaved = createAsyncThunk(
  "saved/fetchSaved",
  async (userID) => {
    const data = await axios.get(`http://localhost:5000/saved/${userID}`);
    return data.data;
  }
);

export const deleteSaved = createAsyncThunk(
  "saved/deleteSaved",
  async (savedID) => {
    const data = await axios.delete(`http://localhost:5000/saved/${savedID}`);
    return savedID;
  }
);

const initialState = {
  saved: [],
  status: "loading",
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {},
  extraReducers: {
    //add
    [addToSaved.pending]: (state) => {
      state.status = "loading";
    },
    [addToSaved.fulfilled]: (state) => {
      state.status = "loaded";
    },
    [addToSaved.rejected]: (state) => {
      state.status = "loading";
    },
    //fetch
    [fetchSaved.pending]: (state) => {
      state.saved = [];
      state.status = "loading";
    },
    [fetchSaved.fulfilled]: (state, action) => {
      state.saved = action.payload;
      state.status = "loaded";
    },
    [fetchSaved.rejected]: (state) => {
      state.saved = [];
      state.status = "loading";
    },
    //delete
    [deleteSaved.pending]: (state) => {
      state.status = "loading";
    },
    [deleteSaved.fulfilled]: (state, action) => {
      state.saved = state.saved.filter((save) => save.id !== action.payload);
      state.status = "loaded";
    },
    [deleteSaved.rejected]: (state) => {
      state.status = "loading";
    },
  },
});

export const savedReducer = savedSlice.reducer;
