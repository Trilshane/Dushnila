import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIndicators = createAsyncThunk(
  "data/fetchIndicators",
  async () => {
    const { data } = await axios.get("http://dushnila.gooddelo.com/data");
    return data;
  }
);

const initialState = {
  indicators: [],
  dushnilaStatus: "",
};

const indicators = createSlice({
  name: "indicators",
  initialState,
  redusrs: {
    setIndicators(state, action) {
      state.indicators = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIndicators.fulfilled, (state, action) => {
      state.indicators = action.payload;
      if (action.payload.temp > 27 || action.payload.co2 > 800) {
        state.dushnilaStatus = false;
      } else {
        state.dushnilaStatus = true;
      }
    });
  },
});

export const { setIndicators } = indicators.actions;
export default indicators.reducer;
