import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";

const UserCard = ({ user }) => {

  const dispatch = useDispatch();

  // console.log(user)

  if(!user) return (<h1>user feed empty hai</h1>)

  // destructuring the data from the user
  const {
    _id,
    firstName,
    lastName,
    photoUrl,
    gender,
    age,
    skills,
    about,
  } = user;

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId)) // yaha se wo feedSlice ko call krega -> and waha se wo store se hata dega is userId wale card ko
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="card bg-emerald-950 w-96 shadow-sm gap-1">
          <figure>
            <img src={photoUrl} alt="photoUrl" />
          </figure>
          <div className="card-body h-70">
            <h2 className="card-title">
              {firstName + " " + lastName}
            </h2>
            <p className="line-clamp-1 h-2 gap-0.5">{about}</p>
            <p>
              {age + " " + gender}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills?.map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-outline badge-accent text-white border-white">
                  {skill}
                </span>
              ))}
            </div>
            <div className="card-actions justify-evenly mt-5">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleSendRequest("ignored",_id);
                }}>
                Ignore{" "}
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleSendRequest("interested",_id);
                }}>
                Interested!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

// import axios from "axios";
// import React, { useState } from "react"; // <-- ADD useState
// import { BASE_URL } from "../utils/constants";
// import { removeUserFromFeed } from "../utils/feedSlice";
// import { useDispatch } from "react-redux";

// const UserCard = ({ user }) => {
//   const dispatch = useDispatch();
//   const [isRemoving, setIsRemoving] = useState(false); // <-- ADD STATE

//   if (!user) return <h1>user feed empty hai</h1>;

//   const { _id, firstName, lastName, photoUrl, gender, age, skills, about } =
//     user;

//   const handleSendRequest = async (status, userId) => {
//     try {
//       setIsRemoving(true); // <-- Start animation
//       setTimeout(async () => {
//         await axios.post(
//           BASE_URL + "/request/send/" + status + "/" + userId,
//           {},
//           { withCredentials: true }
//         );
//         dispatch(removeUserFromFeed(userId)); // <-- Remove after animation
//       }, 500); // <-- Wait 500ms for animation to finish
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div
//         className={`card bg-emerald-950 w-96 shadow-sm gap-1 transition-all duration-500 ${
//           isRemoving
//             ? "opacity-0 translate-x-20 scale-90"
//             : "opacity-100 translate-x-0 scale-100"
//         }`}>
//         <figure>
//           <img src={photoUrl} alt="photoUrl" />
//         </figure>
//         <div className="card-body h-70">
//           <h2 className="card-title">{firstName + " " + lastName}</h2>
//           <p className="line-clamp-1 h-2 gap-0.5">{about}</p>
//           <p>{age + " " + gender}</p>
//           <div className="flex flex-wrap gap-2 mb-2">
//             {skills?.map((skill, index) => (
//               <span
//                 key={index}
//                 className="badge badge-outline badge-accent text-white border-white">
//                 {skill}
//               </span>
//             ))}
//           </div>
//           <div className="card-actions justify-evenly mt-5">
//             <button
//               className="btn btn-primary"
//               onClick={() => handleSendRequest("ignored", _id)}>
//               Ignore
//             </button>
//             <button
//               className="btn btn-primary"
//               onClick={() => handleSendRequest("interested", _id)}>
//               Interested!
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
