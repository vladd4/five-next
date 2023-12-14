import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetchUser", async (userID) => {
  const data = await axios.get(`http://localhost:5000/user/${userID}`);
  return data.data;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (params) => {
    const data = await axios.post(
      `http://localhost:5000/user/edit/${params.userId}`,
      params
    );
    return data.data;
  }
);

const initialState = {
  user: [],
  status: "loading",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    //user
    [fetchUser.pending]: (state) => {
      state.user = [];
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "loaded";
    },
    [fetchUser.rejected]: (state) => {
      state.user = [];
      state.status = "loading";
    },
    //update user
    [updateUser.pending]: (state) => {
      state.status = "loading";
    },
    [updateUser.fulfilled]: (state) => {
      state.status = "loaded";
    },
    [updateUser.rejected]: (state) => {
      state.status = "loading";
    },
  },
});

export const usersReducer = usersSlice.reducer;
