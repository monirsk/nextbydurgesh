import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  let users = [];

  try {
    users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    console.log("Error in getting user ", error);
    return NextResponse.json({
      message: "Failed to get users information.",
    });
  }
}

export function DELETE(request) {
  return NextResponse.json(
    {
      message: "Deleted !!",
      status: true,
    },
    {
      status: 201,
      statusText: "Status is Passed.",
    }
  );
}

//POST method to create user

export async function POST(request) {
  const { name, email, password, about, profileURL } = await request.json();

  // Check if username already exists
  // const existingUser = await User.findOne({ name });
  // if (existingUser) {
  //   return NextResponse.json(
  //     {
  //       message: "Username already exists",
  //       status: false,
  //     },
  //     {
  //       status: 400, // Bad Request status code
  //     }
  //   );
  // }

  //now create user object with the help of user model

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    const createdUser = await user.save();
    const response = NextResponse.json(createdUser, { status: 201 });
    console.log("User Created");
    return response;
  } catch (error) {
    console.log("There is an error" + error);
    return NextResponse.json(
      {
        message: "Failed to create user.",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
