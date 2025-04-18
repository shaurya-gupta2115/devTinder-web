# 📘 Redux Toolkit + React-Redux – DevTinder Flow Guide

This document explains how Redux Toolkit and React-Redux are used in this project across 4 essential files.

---

## 🔗 Files Overview

| File                       | Purpose                                 |
| -------------------------- | --------------------------------------- |
| `userSlice.js`             | Defines how user state behaves          |
| `appStore.js`              | Combines slices and creates Redux store |
| `App.jsx`                  | Provides Redux store to the whole app   |
| `Login.jsx` (in component) | Dispatches actions to update the store  |

---

## 1️⃣ `userSlice.js` – 💡 Brain of the user state

```js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

✅ What it does:
	•	createSlice builds a slice of global Redux state.
	•	addUser: stores logged-in user data.
	•	removeUser: clears user state on logout.





    import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;

✅ What it does:
	•	Combines all slices (user in this case) into one centralized store.
	•	Store is later used by React-Redux’s <Provider>.






import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

✅ What it does:
	•	Wraps the entire app in <Provider store={appStore}>
	•	This makes the Redux store accessible in all components.
	•	Also sets up routing for different pages.



import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const dispatch = useDispatch();

// After login API response
dispatch(addUser(userData));

✅ What it does:
	•	useDispatch() gives access to the Redux dispatch function.
	•	dispatch(addUser(...)) updates the global state with user info.






import { useSelector } from "react-redux";

const user = useSelector((store) => store.user);
console.log(user);





User logs in →
  Login.jsx sends POST request →
    dispatch(addUser(userData)) →
      userSlice reducer updates store →
        user info available app-wide →
          Other components useSelector to read it




import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const dispatch = useDispatch();
dispatch(removeUser());
```
