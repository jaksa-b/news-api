import { createSlice } from "@reduxjs/toolkit";

const autocompletesSlice = createSlice({
  name: "autocompletes",
  initialState: {
    data: [],
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        data: action.payload.autocompletes,
      };
    },
  },
});

export const { fetchData } = autocompletesSlice.actions;

export default autocompletesSlice.reducer;
