//api/tasks/{taskid}

import { getResponseMessage } from "@/helper/responseMessage";
import { createTask } from "@/models/task";
import { NextResponse } from "next/server";

//getting single task
export async function GET(request, { params }) {
  const { taskid } = params;

  try {
    const task = await createTask.findById(taskid);

    return NextResponse.json(task);
  } catch (error) {
    return getResponseMessage("Single task not fetched", 404, false);
  }
}

//updating particular task
export async function PUT(request, { params }) {
  const { taskid } = params;
  const requestBody = await request.json();
  try {
    const task = await createTask.findById(taskid);

    Object.assign(task, requestBody);
    const updatedTask = await task.save();

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Not updatted", 404, false);
  }
}

export async function DELETE(request, { params }) {
  const { taskid } = params;

  try {
    await createTask.deleteOne({
      _id: taskid,
    });

    return getResponseMessage("Task Deleted", 200, true);
  } catch (error) {
    return getResponseMessage("Not Deleted", 404, false);
  }
}
