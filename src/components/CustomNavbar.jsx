"use client";

import UserContext from "@/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";

const CustomNavbar = () => {
  const context = useContext(UserContext);

  return (
    <nav className="bg-primary h-12 py-2 px-36 flex justify-between items-center text-white">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <Link href={"/"}>ToDo</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          {context.user && (
            <>
              <li>
                {" "}
                <Link href={"/"} className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/add-task"} className="hover:text-orange-400">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href={"/show-tasks"} className="hover:text-orange-400">
                  Show Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          {context.user && (
            <>
              <li> {context.user.name}</li>
              <li>Logout</li>
            </>
          )}

          {!context.user && (
            <>
              <li>
                {" "}
                <Link href={"/login"} className="hover:text-orange-400">
                  Login
                </Link>
              </li>
              <li>
                <Link href={"/signup"} className="hover:text-orange-400">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
