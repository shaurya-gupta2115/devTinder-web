import axios from "axios";
import React from "react";
import { useState } from "react";
const Login = () => {
  const [emailId, setEmailId] = useState("shaurya@gmail.com");
  const [password, setPassword] = useState("Shaurya@123");

  // const submit = (e) => {
  //     e.preventDefault();
  //     // send login data to backend
  //     console.log("Submitting login:", { emailId, password });
  //     // Example fetch or axios call here
  // };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:7777/login", {
        emailId,
        password,
      });
      console.log(res)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="h-[calc(100vh-20rem)] flex flex-col">
        <div className="flex-1 flex justify-center items-center">
          <div className="card-body items-center text-center w-full justify-center">
            <h2 className="card-title text-center" > Login : {emailId} </h2>
            <form>
              <div className="flex flex-col m-3 gap-3 w-[600px] text-center items-center mx-auto">
                <label className="input validator border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 rounded-md transition duration-200">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="none"
                      stroke="currentColor">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="input"
                    required
                    placeholder="EmailID"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </label>
                <label className="input border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 rounded-md transition duration-200">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    type="input"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="card-actions flex justify-center">
                <button
                  className="btn btn-primary" onClick={handleLogin}
                  >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
