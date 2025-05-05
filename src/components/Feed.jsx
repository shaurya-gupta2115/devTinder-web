import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed); // (store) -> entire redux state that's passed into selector function.
  // “Hey Redux, give me the global state, and I’ll return just the feed part from it.”

  const dispatch = useDispatch();

  const getFeed = async () => {
    // if the fetched feed is in store then it will return otherwise ...getFeed() will run
    if (feed) return;
    // this is the function that will fetch the feed from the feed api
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error("Failed to fetch Feed" + err.message);
    }
  };

  console.log(feed);

  useEffect(() => {
    getFeed(); //or say if(!feed) return ; in the getFeed section // ye walaa jaise hi ek baar rrun krega ...call jaegi getFeed ko ..if pehle se feed hogi to to show krdega agar feed nhi hogi to fetch krega feed ko 
  }, []);

  if(!feed) return;

  if(feed.length <=0) return <h1 className="font-bold text-2xl text-center flex justify-center items-center">Your Feed is empty</h1>

  return (
    <>
      {feed ? (
        <div>
          <UserCard user={feed[0]} />
        </div>
      ) : (
        <div className="text-center font-extrabold text-3xl">No more feed</div>
      )}
    </>
  );
};

export default Feed;
