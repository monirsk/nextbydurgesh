import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed", "just added"],
    default: "pending",
  },

  userid: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const createTask =
  mongoose.models.tasks || mongoose.model("tasks", TaskSchema);
