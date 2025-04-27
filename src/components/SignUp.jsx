import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   // creating the axios call to /signup page

// const sendSignUp = async () => {
//   try {
//     const res = await axios.post(
//       BASE_URL + "/signup",
//        formData , // we will send formData since it is an object but we will not send {formData}
//       { withCredentials: true }
//     );
//   } catch (err) {
//     console.error(err);
//   }
// };

//   const prevState = {
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     age: "",
//     gender: "",
//     password: "",
//   };
//   const [formData, setFormData] = useState(prevState);

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

//   // Explaination to the above code ::

//   //  •	const { name, value } = e.target;
//   //  ➔ Destructuring is used here:
//   // 	•	e.target.name gives the name attribute of the input field (example: "email", "password", "firstName").
//   // 	•	e.target.value gives the current value typed into that field (example: "shaurya@gmail.com", "mypassword123").

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Submit this to your backend
//     sendSignUp()
//     setFormData(prevState); //
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200">
//       <div className="card w-full max-w-md shadow-2xl bg-base-100 p-8">
//         <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
// <form onSubmit={handleSubmit} className="space-y-4">
//   <input
//     type="text"
//     name="firstName"
//     placeholder="First Name"
//     className="input input-bordered w-full"
//     onChange={handleChange}
//     value={formData.firstName}
//     required
//   />
//   <input
//     type="text"
//     name="lastName"
//     placeholder="Last Name"
//     className="input input-bordered w-full"
//     onChange={handleChange}
//     value={formData.lastName}
//     required
//   />
//   <input
//     type="tel"
//     name="mobileNumber"
//     placeholder="Mobile Number"
//     className="input input-bordered w-full"
//     onChange={handleChange}
//     value={formData.mobileNumber}
//     required
//   />
//   <input
//     type="email"
//     name="email"
//     placeholder="Email"
//     className="input input-bordered w-full"
//     onChange={handleChange}
//     value={formData.email}
//     required
//   />
//   <input
//     type="number"
//     name="age"
//     placeholder="Age"
//     className="input input-bordered w-full"
//     onChange={handleChange}
//     value={formData.age}
//     required
//   />
//   <select
//     name="gender"
//     className="select select-bordered w-full"
//     onChange={handleChange}
//     value={formData.gender}
//     required>
//     <option value="">Select Gender</option>
//     <option value="Male">Male</option>
//     <option value="Female">Female</option>
//     <option value="Others">Others</option>
//   </select>
//   <input
//     type="password"
//     name="password"
//     placeholder="Password"
//     className="input input-bordered w-full"
//     onChange={handleChange}
//     value={formData.password}
//     required
//   />
//   <button
//     className="btn btn-primary w-full"
//     type="submit">
//     Sign Up
//   </button>
// </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// // analogy
// // User fills input ➔ User clicks 'Sign Up' button ➔
// // Browser sees 'type="submit"' ➔
// // Browser triggers <form> onSubmit ➔
// // handleSubmit(e) runs ➔
// // sendSignUp(formData) is called ➔
// // axios.post() sends data to backend ➔
// // Backend saves user

const SignUp = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        formData, // we will send formData since it is an object but we will not send {formData}
        { withCredentials: true }
      );
      setSuccess("SignUp is Successful!");

      setTimeout(() => {
          <h1>Redirecting to Login Page</h1>
          navigate("/login")
      }, 3000);
    } catch (error) {
      console.error(error);
      setError("SignUp failed! Please try again...", error);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "Babu",
    lastName: "Bhaiya",
    mobileNumber: "8459459594",
    email: "babu@gmail.com",
    age: "21",
    gender: "Male",
    password: "babubhaiya@123",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // destructuring kr di
    setFormData((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sendSignUp(); //ye form data ko backend tk pahucha dega kyunki post api me "formData" send ho rha hai
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col items-center justify-center text-center max-w-md  gap-3">
        <div className="text-3xl font-extrabold underline">SignUp</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.mobileNumber}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.age}
            required
          />
          <select
            name="gender"
            className="select select-bordered w-full"
            onChange={handleChange}
            value={formData.gender}
            required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.password}
            required
          />
          {success && (
            <p className="text-green-500 font-semibold mt-4">{success}</p>
          )}
          {error && <p className="text-red-500 font-semibold mt-4">{error}</p>}

          <button
            className="btn btn-primary w-full"
            type="submit">
            Sign Up
          </button>
        </form>

        <div>
          <p>Already have an account?</p>
          <button
            className="btn btn-link"
            onClick={() => navigate("/login")} // Navigate to signup page
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
