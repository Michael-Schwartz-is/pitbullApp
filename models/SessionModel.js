import { calcDayFromTimestamp } from "@/lib/utils";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const sessionSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  schedule_id: {
    type: Schema.Types.ObjectId,
    ref: "schedule_item",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  signup_timestamp: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  date: {
    type: Date,
    required: true,
    default: () => new Date(date),
  },
  email: {
    type: String,
    required: false,
  },
  day: {
    type: String,
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  test: {
    type: Boolean,
    required: false,
  },
});

//                          singular    schema         collection name
// const SessionModel = models?.session || models("session", sessionSchema, "sessions");

const SessionModel =
  mongoose.models?.session || mongoose.model("session", sessionSchema, "sessions");

export default SessionModel;
