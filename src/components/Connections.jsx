import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      console.log("here are your connections", res?.data?.data);
    } catch (err) {
      console.error("your error is in connection .jsx", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="mt-5 flex justify-center">
      <h1 className="text-3xl font-bold ">Connections</h1>
    </div>
  );
};

export default Connections;
