import React from 'react'
import { useSelector } from "react-redux";
import EditProfile from './EditProfile';


const Profile = () => {
  const user = useSelector((store) => store.user);

  // console.log("Redux user in Profile:", user);
  
  if (!user) return null; // or return a loader/spinner

  const {
    firstName,
    lastName,
    photoUrl,
    gender,
    age,
    skills,
    about,
  } = user;

  return (
    user && (
      <>
        <EditProfile user={user} />
      </>
    )
  );
}

export default Profile