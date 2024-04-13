import React from "react";
import taskSvg from "@/assets/todopic.svg";
import Image from "next/image";

export const metadata = {
  title: "Add Task",
};

const AddTask = () => {
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className="bg-blue-300 col-span-4 col-start-5 shadow shadow-blue-900">
        <div className="my-5 flex justify-center">
          <Image src={taskSvg} alt="Task pic" style={{ width: "50%" }}></Image>
        </div>
        <h1 className="text-3xl text-center text-blue-900">Add Task Here</h1>
        <form action="#!" className="p-4">
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
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm mb-2 font-medium"
            >
              Status
            </label>
            <select
              id="task_status"
              className="appearance-none w-full px-4 py-2  rounded-2xl outline-none focus:ring-2 pr-8 "
            >
              <option value="none" selected disabled>
                --Select Status--
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* button action */}

          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-900 text-white">
              Add Todo
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-900 text-white ms-4">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
