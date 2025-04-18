import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {


  //what happens is that when we refresh the page then the data got offload and store get empetied to avoid this we are building this feature

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data))
    } catch (err) {
      navigate("/login")
      console.error(err)
    }
  };

  // i have to now build functionality in which whenever i reload the page .... fetchuser get run automatically ;

  useEffect(()=> {
    fetchUser();
  },[]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
