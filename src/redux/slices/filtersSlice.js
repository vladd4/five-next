import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk("filters/fetchBrands", async () => {
  const data = await axios.get("http://localhost:5000/filters/brands");
  return data.data;
});

export const fetchModels = createAsyncThunk(
  "filters/fetchModels",
  async (brand) => {
    const data = await axios.get("http://localhost:5000/filters/models", {
      params: { brand },
    });
    return data.data;
  }
);

export const fetchFuel = createAsyncThunk("filters/fetchFuel", async () => {
  const data = await axios.get("http://localhost:5000/filters/fuel");
  return data.data;
});

export const fetchGear = createAsyncThunk("filters/fetchGear", async () => {
  const data = await axios.get("http://localhost:5000/filters/gear");
  return data.data;
});

export const fetchTransmission = createAsyncThunk(
  "filters/fetchTransmission",
  async () => {
    const data = await axios.get("http://localhost:5000/filters/transmission");
    return data.data;
  }
);

export const fetchState = createAsyncThunk("filters/fetchState", async () => {
  const data = await axios.get("http://localhost:5000/filters/state");
  return data.data;
});
const initialState = {
  brands: [],
  models: [],
  fuel: [],
  gear: [],
  transmission: [],
  state: [],
  status: "loading",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: {
    //brands
    [fetchBrands.pending]: (state) => {
      state.brands = [];
      state.status = "loading";
    },
    [fetchBrands.fulfilled]: (state, action) => {
      state.brands = action.payload;
      state.status = "loaded";
    },
    [fetchBrands.rejected]: (state) => {
      state.brands = [];
      state.status = "loading";
    },
    //models
    [fetchModels.pending]: (state) => {
      state.models = [];
      state.status = "loading";
    },
    [fetchModels.fulfilled]: (state, action) => {
      state.models = action.payload;
      state.status = "loaded";
    },
    [fetchModels.rejected]: (state) => {
      state.models = [];
      state.status = "loading";
    },
    //fuel
    [fetchFuel.pending]: (state) => {
      state.fuel = [];
      state.status = "loading";
    },
    [fetchFuel.fulfilled]: (state, action) => {
      state.fuel = action.payload;
      state.status = "loaded";
    },
    [fetchFuel.rejected]: (state) => {
      state.fuel = [];
      state.status = "loading";
    },
    //gear
    [fetchGear.pending]: (state) => {
      state.gear = [];
      state.status = "loading";
    },
    [fetchGear.fulfilled]: (state, action) => {
      state.gear = action.payload;
      state.status = "loaded";
    },
    [fetchGear.rejected]: (state) => {
      state.gear = [];
      state.status = "loading";
    },
    //transmission
    [fetchTransmission.pending]: (state) => {
      state.transmission = [];
      state.status = "loading";
    },
    [fetchTransmission.fulfilled]: (state, action) => {
      state.transmission = action.payload;
      state.status = "loaded";
    },
    [fetchTransmission.rejected]: (state) => {
      state.transmission = [];
      state.status = "loading";
    },
    //state
    [fetchState.pending]: (state) => {
      state.state = [];
      state.status = "loading";
    },
    [fetchState.fulfilled]: (state, action) => {
      state.state = action.payload;
      state.status = "loaded";
    },
    [fetchState.rejected]: (state) => {
      state.state = [];
      state.status = "loading";
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
