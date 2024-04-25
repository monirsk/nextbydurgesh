import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();

  //1.getting user
  try {
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      throw new Error("User not found");
    }

    //2.checking password

    const matched = bcrypt.compareSync(password, user.password);

    if (!matched) {
      throw new Error("Password not matched.");
    }

    //3.creating token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
    //4. create next response---- cookie

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      //   httpOnly: false,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        messsage: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
