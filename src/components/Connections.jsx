import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections =  () => {
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
    <h1 className="text-3xl font-bold mb-4">Connections</h1>
    {!connections ? (
      <p className="text-gray-500 text-lg">No Connections Found 😕</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* You can render your connection cards here */}
        {connections.map((conn) => (
          <div key={conn._id} className="p-4 border rounded shadow">
            <p className="font-semibold">
              {conn.firstName} {conn.lastName}
            </p>
            <p className="text-sm text-gray-600">{conn.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default Connections;
