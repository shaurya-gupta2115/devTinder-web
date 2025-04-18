import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  //what happens is that when we refresh the page then the data got offload and store get empetied to avoid this we are building this feature

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        //here we are going to check whether the token is present or not ...if the token is not present and you want to access the
        // api then it will response by sending unauthorissed access error due to which 401 will get matched and will navigate to the login page
        navigate("/login");
      }
      console.error(err);
    }
  };

  // i have to now build functionality in which whenever i reload the page .... fetchuser get run automatically ;
  useEffect(() => {
    if (!userData) {
      fetchUser(); //this is to check when we have the user data once fetched and stored in redux store ..if user data is not there ..then on refresh we have to call this
      // other wise once data is got at the store then there is no any demand to fetch the data again and agaiin ... it can be directly access from redux-store
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
