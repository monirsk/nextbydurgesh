import { connectDB } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { createTask } from "@/models/task";
import { NextResponse } from "next/server";
connectDB();

//get all the tasks
export async function GET(request) {
  let tasks = [];

  try {
    const Tasks = await createTask.find();

    return NextResponse.json(Tasks);
  } catch (error) {
    console.log("Shihab here is the get all task error: ", error);
    return NextResponse.json({
      message: "Task can not be get.",
    });
  }
}

//create all tasks

export async function POST(request) {
  const { title, content, userid } = await request.json();

  try {
    const task = new createTask({
      title,
      content,
      userid,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log("Shihab here is the error : ", error);
    //for NextResponse, I have created a external function

    return getResponseMessage("Error in getting task", 404, false);
  }
}
