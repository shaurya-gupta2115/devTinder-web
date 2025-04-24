import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name : "requests",
    initialState: null,
    reducers: {
        addRequests:(state,action)=> action.payload,
        acceptRequest:(state, action ) => action.payload,
        rejectRequest: () => null,
    }
})

export const { acceptRequest, rejectRequest,addRequests} = requestSlice.actions;
export default requestSlice.reducer;