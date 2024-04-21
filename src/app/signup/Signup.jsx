"use client";

import React, { useState } from "react";

import signUpsvg from "@/assets/signupImage.svg";
import Image from "next/image";
import { addUser } from "@/services/userService";
import { toast } from "react-toastify";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "abcder",
  });

  const handleAddUser = async (event) => {
    event.preventDefault();

    //validation
    if (user.name.trim() === "" || user.name == null) {
      toast.warning("Name is required", {
        position: "top-center",
      });
      return;
    }

    console.log("This is what u enttered in the form shihab: ", user);

    try {
      const result = await addUser(user);
      console.log("This is what response data server send: ", user);
      toast.success("User is added", {
        position: "top-center",
      });

      setUser({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "abcdr",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error in adding user", {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "abcdr",
    });
  };

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
          <form action="" className="mt-5" onSubmit={handleAddUser}>
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
                name="user_name"
                onChange={(event) => {
                  setUser({ ...user, name: event.target.value });
                }}
                value={user.name}
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
                name="user_email"
                onChange={(event) => {
                  setUser({ ...user, email: event.target.value });
                }}
                value={user.email}
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
                  setUser({ ...user, password: event.target.value });
                }}
                value={user.password}
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
                name="user_about"
                onChange={(event) => {
                  setUser({ ...user, about: event.target.value });
                }}
                value={user.about}
              ></textarea>
            </div>
            <div className="mt-3 flex justify-center gap-2">
              <button
                type="submit"
                className="bg-primary py-2 px-3 rounded-lg hover:bg-blue-900 text-white "
              >
                Signup
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-orange-700 py-2 px-3 rounded-lg hover:bg-orange-600 text-white"
              >
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
