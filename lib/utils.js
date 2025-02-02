import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection Successful!");
  } catch (err) {
    console.log(err);
  }
}
