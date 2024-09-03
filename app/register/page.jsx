import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center text-white">
      <div className="register border-2 border-gray-500 rounded-xl py-6 px-4 flex flex-col items-center justify-center">
        <h2 className="mb-3">Create New Account</h2>
        <form action="">
          <div className="flex flex-col my-2">
            Username:-
            <input
              type="text"
              className="bg-gray-400 rounded-lg py-1 px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your uesrname"
            />
          </div>
          <div className="flex flex-col my-2">
            Email:-
            <input
              type="text"
              className="bg-gray-400 rounded-lg py-1 px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col my-2">
            Password:-
            <input
              type="text"
              className="bg-gray-400 rounded-lg py-1 px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex flex-col my-2">
            Confirm Password:-
            <input
              type="text"
              className="bg-gray-400 rounded-lg py-1 px-3 w-4/5 my-1 text-black focus:outline-none"
              placeholder="Enter your password"
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

export default page;
