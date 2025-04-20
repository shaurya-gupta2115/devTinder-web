import React from "react";

const UserCard = ({ user }) => {
  // destructuring the data from the user
  const {
    firstName,
    lastName,
    mobileNumber,
    email,
    gender,
    age,
    skills,
    about,
  } = user;

  return (
    <>
      <div className="flex justify-center">
        <div className="card bg-emerald-950 w-96 shadow-sm gap-1">
          <figure>
            <img src={user.photoUrl} alt="photoUrl" />
          </figure>
          <div className="card-body h-70">
            <h2 className="card-title">
              {user.firstName} {user.lastName}
            </h2>
            <p className="line-clamp-1 h-2 gap-0.5">{about}</p>
            <p>
              {age},{gender}
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
              <button className="btn btn-primary">Ignore </button>
              <button className="btn btn-primary">Interested!</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default UserCard;
