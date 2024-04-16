import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name can not be blank"],
  },
  email: {
    type: String,
    required: [true, "Email is Required !! "],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  about: String,
  profileURL: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
