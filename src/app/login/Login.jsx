"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = (event) => {
    event.preventDefault();

    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data", {
        position: "top-center",
      });
      return;
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 col-start-5 bg-signupColor p-4 rounded-2xl shadow shadow-blue-900">
        <div className="py-5"></div>

        <h1 className="text-3xl text-center text-white">Login Here</h1>
        <form action="" onSubmit={loginFormSubmitted}>
          {/* email */}
          <div className="mt-3">
            <label
              htmlFor="user_email"
              className="block text-sm mb-2 font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              className="p-2 w-full rounded-2xl outline-none focus:ring-2"
              placeholder="Enter your email"
              name="user_email"
              onChange={(event) => {
                setLoginData({ ...loginData, email: event.target.value });
              }}
              value={loginData.email}
            />
          </div>

          {/* password */}
          <div className="mt-3">
            <label
              htmlFor="user_password"
              className="block text-sm mb-2 font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="user_password"
              className="p-2 w-full rounded-2xl outline-none focus:ring-2"
              placeholder="Enter your password"
              name="user_password"
              onChange={(event) => {
                setLoginData({ ...loginData, password: event.target.value });
              }}
              value={loginData.password}
            />
          </div>

          <div className="mt-3 flex justify-center gap-2">
            <button
              type="submit"
              className="bg-primary py-2 px-3 rounded-lg hover:bg-blue-900 text-white "
            >
              Login
            </button>
            <button
              type="button"
              className="bg-orange-700 py-2 px-3 rounded-lg hover:bg-orange-600 text-white"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {/* {JSON.stringify(loginData)} */}
    </div>
  );
};

export default Login;
