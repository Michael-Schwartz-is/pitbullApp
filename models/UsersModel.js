import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ["user", "admin", "mod"],
    default: "user",
  },
  image: {
    type: String,
    default: "",
    trim: true,
  },
  updated_image: {
    type: String,
    default: "",
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// const userModel = models?.user ?? model("user", userSchema, "users");

const userModel = mongoose.models?.user ?? mongoose.model("user", userSchema, "users");

export default userModel;
