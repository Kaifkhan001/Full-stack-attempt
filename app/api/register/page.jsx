"use client"
import React, { useEffect,useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
   setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async(e) => {
   e.preventDefault();

   try {
    const response = await axios.post('https://backend-attempt01.onrender.com/api/register', formData);
    console.log(response);
   } catch (error) {
    console.log("Error registering user: ", error);
   }
  }
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center text-white">
      <div className="register border-2 border-gray-500 rounded-xl py-6 px-4 flex flex-col items-center justify-center">
        <h2 className="mb-3">Create New Account</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            Username:-
            <input
              type="text"
              name="username"
              className="bg-gray-400 rounded-lg py-1 placeholder-black px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your uesrname"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            Email:-
            <input
              type="text"
              name="email"
              className="bg-gray-400 rounded-lg py-1 placeholder-black px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            Password:-
            <input
              type="password"
              name="password"
              className="bg-gray-400 rounded-lg py-1 placeholder-black px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            Confirm Password:-
            <input
              type="password"
              name="confirmPassword"
              className="bg-gray-400 rounded-lg py-1 placeholder-black px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between  mt-4">
            <label className="flex gap-1 ">
              <input type="checkbox" name="subscribe" />
              Subscribe
            </label>
            <input type="submit" value="Create" className="bg-gray-600 py-1 px-4 font-semibold text-sm hover:cursor-pointer hover:bg-gray-700 rounded-lg " />
          </div>
        </form>
          <h3 className="mt-4 text-xs"><a href="" className="text-blue-700 hover:text-blue-800">Terms</a> and <a href="" className="text-blue-700 hover:text-blue-800">Conditions</a></h3>
      </div>
    </div>
  );
};

export default Register;
