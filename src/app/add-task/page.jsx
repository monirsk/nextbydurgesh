"use client";

import React, { useState } from "react";
import taskSvg from "@/assets/todopic.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

// export const metadata = {
//   title: "Add Task",
// };

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    //temporary solution
    userid: "65f7d2de01be6e8fd1a08590",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log("This is what u enttered in the form shihab: ", task);

    // validate form data

    try {
      const result = await addTask(task);
      console.log("This is what response data server send: ", task);
      toast.success("Your task is added", {
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
        userid: "65f7d2de01be6e8fd1a08590",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error in adding task", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 mt-4">
      <div className="bg-blue-300 col-span-4 col-start-5 shadow shadow-blue-900">
        <div className="my-5 flex justify-center">
          <Image src={taskSvg} alt="Task pic" style={{ width: "50%" }}></Image>
        </div>
        <h1 className="text-3xl text-center text-blue-900">Add Task Here</h1>
        <form action="#!" className="p-4" onSubmit={handleAddTask}>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm mb-2 font-medium"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full outline-none focus:ring-2 "
              id="task_title"
              placeholder="Enter task title..."
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>

          {/* task content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm mb-2 font-medium"
            >
              Content
            </label>
            <textarea
              type="text"
              className="w-full px-4 py-2 rounded-3xl outline-none focus:ring-2 "
              id="task_content"
              placeholder="Enter tast content"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm mb-2 font-medium"
            >
              Status
            </label>
            <select
              id="task_status"
              className="appearance-none w-full px-4 py-2  rounded-2xl outline-none focus:ring-2 pr-8 "
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                --Select Status--
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* button action */}

          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-900 text-white">
              Add Task
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-900 text-white ms-4">
              Clear
            </button>
          </div>

          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
