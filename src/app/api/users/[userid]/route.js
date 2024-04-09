import { User } from "@/models/user";
import { Trykker } from "next/font/google";
import { NextResponse } from "next/server";

//getting particuler user

export async function GET(request, { params }) {
  const { userid } = params;

  try {
    const user = await User.find({
      _id: userid,
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json("User not get.");
  }
}

//Deleting particuler user
export async function DELETE(request, { params }) {
  const { userid } = params;

  try {
    await User.deleteOne({ _id: userid });
    return NextResponse.json({
      message: "Deleted user successfully.",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deleting user",
    });
  }
}

//updating particuler user

export async function PUT(request, { params }) {
  const { userid } = params;
  const requestBody = await request.json();

  try {
    const user = await User.findById(userid);

    const updatedUser = {
      ...user.toObject(),
      ...requestBody,
    };

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json("User is not Updated");
  }
}
