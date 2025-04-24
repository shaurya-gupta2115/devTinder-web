import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, rejectRequest } from "../utils/requestSlice";

const Request = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  //review request function
  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      ); //status have to be either interested or rejected as our api is defined to perform for these only ;
      dispatch(rejectRequest(_id)); // yaha pr request._id hi jaa rhi haiiiii and ye request reject nhi kr rha haii..ye just request ko store se hata de rha hai ... and by default hamara backend request ko connect ion me daal de rha hai and hata de rha hai request section se
    } catch (err) {
      console.error("review request: ", err);
    }
  };

  //fetch request fcall
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="mt-5 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold tracking-wide mb-4 underline text-white text-center">
        Requests
      </h1>
      {!requests ? (
        <p className="text-gray-500 text-lg">Loading Connections...</p>
      ) : requests.length === 0 ? (
        <p className="text-gray-500 text-lg">No Connections Found 😕</p>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 w-4/5 h-1/4 px-10 align-middle">
          {/* You can render your connection cards here */}
          {requests.map((request) => {
            const { _id, firstName, lastName, photoUrl, age, gender, about } =
              request.fromUserId; // here the id is of the user who sent the request not the request._id i.e. id of the request you made

            return (
              <div
                key={_id}
                className="p-4 border m-3 text-center mt-4 rounded-2xl shadow-2xl ">
                <img
                  src={photoUrl}
                  alt="photo"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-[1.01] overflow-auto mx-auto w-60 h-60 object-cover "
                />
                <p className="font-bold my-2 text-yellow-300">
                  {firstName} {lastName}
                </p>
                <p>
                  {age}, {gender}
                </p>
                <p className="text-[14px]">About: {about}</p>
                <div className="flex gap-10 justify-center m-4 flex-wrap">
                  //hum yaha pr request ki id denge naaki jo destructure kri hai
                  id wo wali ...because request._id se hi wo accept krega
                  request
                  <button
                    className="btn btn-success"
                    onClick={() => reviewRequest("accepted", request._id)}>
                    Accept
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => reviewRequest("rejected", request._id)}>
                    Decline
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Request;
