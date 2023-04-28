import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdvice = createAsyncThunk(
  "advice/getAdvice",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("	https://api.adviceslip.com/advice");
      return data.slip;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const slice = createSlice({
  name: "advice",
  initialState: {
    advice: {},
  },
  extraReducers: {
    [getAdvice.pending]: (state) => {},
    [getAdvice.fulfilled]: (state, action) => {
      state.advice["id"] = action.payload.id;
      state.advice["advice"] = action.payload.advice;
    },
    [getAdvice.rejected]: (state) => {},
  },
});

export default slice.reducer;
