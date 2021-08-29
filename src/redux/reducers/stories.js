import { createSlice } from "@reduxjs/toolkit";

const storiesSlice = createSlice({
  name: "stories",
  initialState: {
    data: [],
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        data: action.payload.stories,
      };
    },
  },
});

export const { fetchData } = storiesSlice.actions;

export default storiesSlice.reducer;
