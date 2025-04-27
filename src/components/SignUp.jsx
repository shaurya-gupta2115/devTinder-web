import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    age:"",
    gender: "",
    password: "",
    photoUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit this to your backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
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
          <input
            type="url"
            name="photoUrl"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.photoUrl}
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={formData.dob}
            required
          />
          <button className="btn btn-primary w-full" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
