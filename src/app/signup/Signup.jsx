"use client";

import React from "react";

import signUpsvg from "@/assets/signupImage.svg";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 col-start-5 bg-signupColor p-4 rounded-2xl shadow shadow-blue-900">
        <div className="my-5 flex justify-center">
          <Image
            src={signUpsvg}
            alt="Sign Up pic"
            style={{ width: "50%", height: "80px" }}
          ></Image>
        </div>

        <div className="">
          <h1 className="text-3xl text-center text-white">Signup</h1>
          <form action="" className="mt-5">
            {/* name */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm mb-2 font-medium text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="user_name"
                className="p-2 w-full rounded-2xl outline-none focus:ring-2"
                placeholder="Enter your name"
              />
            </div>

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
              />
            </div>

            {/* about */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm mb-2 font-medium text-white"
              >
                About
              </label>
              <textarea
                id="user_about"
                className="p-2 w-full rounded-2xl outline-none focus:ring-2"
                placeholder="About"
                rows={6}
              ></textarea>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              <button className="bg-primary py-2 px-3 rounded-lg hover:bg-blue-900 text-white ">
                Signup
              </button>
              <button className="bg-orange-700 py-2 px-3 rounded-lg hover:bg-orange-600 text-white">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
