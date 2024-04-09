"use client";

import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-900 h-12 py-2 px-36 flex justify-between items-center text-white">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <Link href={"/"}>ToDo</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            {" "}
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/add-task"}>Add Task</Link>
          </li>
          <li>
            <Link href={"/"}>Show Tasks</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            {" "}
            <Link href={"/"}>Login</Link>
          </li>
          <li>
            <Link href={"/"}>Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
