import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();

  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log("here are your connections", res?.data?.data);
      dispatch(addConnections(res.data.data)); // whole connections will get store in the redux store and after that we can use them
      // but there is a thinking that we haven't have any global use of the connections ... so should we use them or not ??
    } catch (err) {
      console.error("your error is in connection.jsx", err);
    }
  };

  // if (!connections) return ;
  // if (connections.length === 0) return <h1>No Connections Found</h1>;

  useEffect(() => {
    fetchConnections();
  }, []); // its missing dependency because we just want to have one call after the page load

  return (
    <div className="mt-5 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold tracking-wide mb-4 underline text-white text-center">
        Connections
      </h1>
      {!connections ? (
        <p className="text-gray-500 text-lg">Loading Connections...</p>
      ) : connections.length === 0 ? (
        <p className="text-gray-500 text-lg">No Connections Found 😕</p>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 w-4/5 h-3/6 px-10">
          {connections.map((connection) => {
            const {
              firstName,
              lastName,
              photoUrl,
              age,
              gender,
              about,
              skills,
            } = connection;
            return (
              <div
                key={connection._id}
                className="p-4 border m-3 text-center mt-4 rounded-2xl shadow-2xl">
                <img
                  src={photoUrl}
                  alt="photo"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-[1.01] overflow-auto mx-auto w-60 h-60 object-cover"
                />
                <p className="font-bold my-2 text-yellow-300">
                  {firstName} {lastName}
                </p>
                <p className="text-sm text-gray-600">{skills?.join(", ")}</p>
                <p>{age}, {gender}</p>
                <p className="text-[14px]">About: {about}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Connections;
