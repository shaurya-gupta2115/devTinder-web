import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice" //importing connection slice form connectionSlice.js
// hum isko aise naam isliye de kste hai kyunki by default hum waha se export kre hai lekin lekin ..agar waha pr multiple cheeze hoti to hume specify krna hota ki kya hum import kr rhe hai and kya import nhi kr rhe hai 
import requestReducer from "./requestSlice"


const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requests: requestReducer
  },
});

export default appStore;
