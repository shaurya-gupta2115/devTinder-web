import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

// const Login = () => {
//   return (
//     <>
//       <div className="card bg-base-100 shadow-sm flex w-full h-full justify-center my-auto">
//         <div className="card-body items-center">
//           <div className="flex w-full h-full justify-center items-center">
//             <div className="card bg-base-100 w-96 shadow-sm p-3">
//               <fieldset className="fieldset mx-2">
//                 <legend className="fieldset-legend">Email ID</legend>
//                 <input type="text" className="input" placeholder="Email here" />
//                 <p className="fieldset-label">Required</p>
//               </fieldset>
//               <fieldset className="fieldset mx-2">
//                 <legend className="fieldset-legend">Password</legend>
//                 <input
//                   type="text"
//                   className="input"
//                   placeholder="Password here"
//                 />
//                 <p className="fieldset-label">Required</p>
//               </fieldset>
//             </div>
//           </div>
//           <div className="card-actions">
//             <button className="btn btn-primary">Login</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
const Login = () => {
  // states
  const [email, setEmail] = useState("shaurya@gmail.com");
  const [password, setPassword] = useState("Shaurya@123");
  const [error, setError] = useState("");

  //functions
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // i have to pass this credentials otherwise the cookies which are to ve passsed will not get into other api calls or other routes
      // console.log(res.data);
      dispatch(addUser(res.data)); //dispatch this data ..to action of adding user using addUser data
      return navigate("/"); //jaise hi handle login me click krega to wo data hai sanskriti wala wo recheck honga and then feed page me navigarte ho jaega ... verify hote haiii isliye wo wala navigation wala last me likha hai
    } catch (err) {
      setError("Invalid Credentials :(");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="card w-96 shadow-sm p-6 bg-base-100">
        <fieldset className="fieldset mx-2">
          <legend className="fieldset-legend">Email ID : {password}</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Email here"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="fieldset-label">Required </p>
        </fieldset>
        <fieldset className="fieldset mx-2 mt-4">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input w-full"
            placeholder="Password here"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="fieldset-label">Required</p>
        </fieldset>
        <p className="text-shadow-amber-500 text-red-400 font-bold text-sm mt-2 mx-2">
          {error}{" "}
        </p>
        <div className="card-actions mt-4 flex justify-center">
          <button className="btn btn-primary w-full" onClick={handleLogin}>
            Login
          </button>
          <div className="text-center mt-4">
            <p>Don't have an account?</p>
            <button
              className="btn btn-link"
              onClick={() => navigate("/signup")} // Navigate to signup page
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
