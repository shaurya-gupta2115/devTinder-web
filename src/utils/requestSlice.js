import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequests: (state, action) => action.payload,
    rejectRequest: (state, action) => {
      return state.filter((request) => request._id !== action.payload);
    },
  },
});

export const { rejectRequest, addRequests } = requestSlice.actions;
export default requestSlice.reducer;




// Initial State: Changed initialState from null to an empty array [] since filtering operations require an array.
// rejectRequest Reducer:
// The action.payload is expected to contain the _id of the request to be removed.
// The filter method is used to create a new array excluding the item with the matching _id.
