import React, { useState} from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [update, setUpdate] = useState("Update Profile");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("EditProfile mounted");
  // }, []);
  // her ethe edit profile is mounted successfully --> it was just a minor check

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          skills: user.skills || [],
          gender,
          age,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));

      //clear the existing error if they are present and corrected
      setError("");

      // setUpdate("Updated!");
      // setTimeout(() => setUpdate("Update Profile"), 2000);

      setSaved(true);
      setInterval(() => {
        setSaved(false);
      }, 3000);

      setUpdate("Updated");
      setInterval(() => {
        setUpdate("Update Profile");
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex mx-10 gap-15 justify-center">
        <div className="min-h-80 flex justify-center ">
          <div className="card w-96 shadow-2xl shadow-amber-800 p-6 bg-base-100">
            <div className="text-center text-xl font-bold underline">
              {" "}
              Edit Profile
            </div>
            {/* firstName */}
            <fieldset className="fieldset mx-2">
              <legend className="fieldset-legend">First Name</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </fieldset>
            {/* //last name */}
            <fieldset className="fieldset mx-2 mt-4">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter LastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <p className="fieldset-label"></p>
            </fieldset>

            {/* gender */}
            <fieldset className="fieldset mx-2 mt-4">
              <legend className="fieldset-legend">Gender</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <p className="fieldset-label"></p>
            </fieldset>
            {/* //age */}
            <fieldset className="fieldset mx-2 mt-4">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <p className="fieldset-label"></p>
            </fieldset>
            {/* //about */}
            <fieldset className="fieldset mx-2 mt-4">
              <legend className="fieldset-legend">About</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter About"
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              />
              <p className="fieldset-label"></p>
            </fieldset>
            {/* //photoUrlf */}
            <fieldset className="fieldset mx-2 mt-4">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Photo Url"
                value={photoUrl}
                onChange={(e) => {
                  setPhotoUrl(e.target.value);
                }}
              />
              <p className="fieldset-label"></p>
            </fieldset>

            {/* error message  */}
            <p className="text-shadow-amber-500 text-red-400 font-bold text-sm mt-2 mx-2">
              {error}{" "}
            </p>

            {update && (
              <button
                onClick={saveProfile}
                className="border-2 border-amber-400 bg-amber-300 hover:bg-amber-400 hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out text-black text-xl font-bold rounded-full px-3 py-1 my-4 shadow-md hover:shadow-lg">
                {update}
              </button>
            )}

            {/* testing whether button component is working or not  */}
            {/* <button onClick={() => console.log("Hello clicked!")}>
              Click test
            </button> */}
          </div>
        </div>
        {/* Here we have to send updated value every time and whenever the user changes its value that value is passed on this component and when it is set then the final output can be seen by saving  */}
        <UserCard
          user={{
            firstName,
            lastName,
            photoUrl,

            skills: user.skills,
            gender,
            age,
            about,
          }}
        />
        {saved && (
          <div className="toast toast-end toast-top z-50">
            <div className="alert alert-success shadow-lg animate-fade-in ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              <span>Profile Saved successfully!</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditProfile;

// Flow of the work

// <Profile />
//   └── uses Redux to get user data
//   └── passes user to ➤ <EditProfile user={user} />
//         ├── destructures user props into useState
//         ├── updates local state based on form inputs
//         └── passes updated values to ➤ <UserCard user={...updatedUserProps} />
