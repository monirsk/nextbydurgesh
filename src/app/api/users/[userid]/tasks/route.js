import { getResponseMessage } from "@/helper/responseMessage";
import { createTask } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userid } = params;

  try {
    const tasks = await createTask.find({
      userid: userid,
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.log("Shihab here is error :::", error);
    return getResponseMessage("Not fetched", 404, false);
  }
}
