"use client";

import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-primary h-12 py-2 px-36 flex justify-between items-center text-white">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <Link href={"/"}>ToDo</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
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
            <Link href={"/show-user"} className="hover:text-orange-400">
              Show User
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
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
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
