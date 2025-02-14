import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";
import dayjs from "dayjs";
import userModel from "@/models/UsersModel";

export const daysOfWeek = [
  { name: "Sunday", hebName: "ראשון" },
  { name: "Monday", hebName: "שני" },
  { name: "Tuesday", hebName: "שלישי" },
  { name: "Wednesday", hebName: "רביעי" },
  { name: "Thursday", hebName: "חמישי" },
  { name: "Friday", hebName: "שישי" },
  { name: "Saturday", hebName: "שבת" },
];

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
// https://day.js.org/docs/en/parse/string-format

export function calcDayFromTimestamp(targetDay, timestamp) {
  const date = dayjs(timestamp || dayjs());
  const dayNumber = daysOfWeek.findIndex((d) => d.name === targetDay);
  if (dayNumber < 0) return "Wrong day input";
  const nextDate = date.day(dayNumber);
  const result = {
    date: nextDate.format("DD/MM/YYYY"),
    shrotDate: nextDate.format("DD MMM"),
    day: targetDay,
    month: nextDate.format("MMM"),
  };
  // console.log("calcDayFromTimestamp result", result);
  return result;
}

export async function getUserRole(email) {
  await connectToDB();
  const user = await userModel.findOne({ email });
  return user.role;
}

export async function addUserToDB(session) {
  connectToDB();
  let user = await userModel.findOne({ email: session.user.email });
  !user
    ? (user = userModel.create({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }))
    : "user already in db";

  return user;
}
