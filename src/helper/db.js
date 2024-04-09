import { User } from "@/models/user";
import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "work_manager",
    });

    console.log("Database connection Successfull...");

    // //testing by creating an user
    // const uuser = new User({
    //   name: "Rakeshihab",
    //   password: "123523",
    //   age: 35,
    // });

    // await uuser.save();
    // console.log("User is created....");
  } catch (error) {
    console.log("Failed to connect to MOngoDB");
  }
};
