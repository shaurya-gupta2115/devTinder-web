import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      // return action.payload
      return action.payload;
    },
    // removeUserFromFeed: (state, action) => {
    //     const newFeed = state.filter((user)=> user._id !== action.payload) //action.payload is that user jiske card me hum click kr rhe haii....hum saare card ko filter krenge and uska arrray bana lenge jisme user jisme interested click kre hai wo na ho bs ...that'sit
    //     return newFeed
    // }
    removeUserFromFeed: (state, action) => {
      state.shift(); // Just remove the first user
      return state;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer