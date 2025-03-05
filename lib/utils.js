import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";
import userModel from "@/models/UsersModel";
import { formatDate, nextDay } from "date-fns";

// export const daysOfWeek = [
//   {
//     name: "sunday",
//     hebName: "ראשון",
//     next: () => formatDate(nextSunday(new Date()), "dd-MM-yyyy"),
//   },
//   { name: "monday", hebName: "שני", next: () => formatDate(nextMonday(new Date()), "dd-MM-yyyy") },
//   {
//     name: "tuesday",
//     hebName: "שלישי",
//     next: () => formatDate(nextTuesday(new Date()), "dd-MM-yyyy"),
//   },
//   {
//     name: "wednesday",
//     hebName: "רביעי",
//     next: () => formatDate(nextWednesday(new Date()), "dd-MM-yyyy"),
//   },
//   {
//     name: "thursday",
//     hebName: "חמישי",
//     next: () => formatDate(nextThursday(new Date()), "dd-MM-yyyy"),
//   },
//   { name: "friday", hebName: "שישי", next: () => formatDate(nextFriday(new Date()), "dd-MM-yyyy") },
//   {
//     name: "saturday",
//     hebName: "שבת",
//     next: () => formatDate(nextSaturday(new Date()), "dd-MM-yyyy"),
//   },
// ];

export const daysOfWeek = [
  {
    name: "sunday",
    hebName: "ראשון",
    next: () => formatDate(nextDay(new Date(), 0), "dd-MM-yyyy"),
  },
  {
    name: "monday",
    hebName: "שני",
    next: () => formatDate(nextDay(new Date(), 1), "dd-MM-yyyy"),
  },
  {
    name: "tuesday",
    hebName: "שלישי",
    next: () => formatDate(nextDay(new Date(), 2), "dd-MM-yyyy"),
  },
  {
    name: "wednesday",
    hebName: "רביעי",
    next: () => formatDate(nextDay(new Date(), 3), "dd-MM-yyyy"),
  },
  {
    name: "thursday",
    hebName: "חמישי",
    next: () => formatDate(nextDay(new Date(), 4), "dd-MM-yyyy"),
  },
  { name: "friday", hebName: "שישי", next: () => formatDate(nextDay(new Date(), 5), "dd-MM-yyyy") },
  {
    name: "saturday",
    hebName: "שבת",
    next: () => formatDate(nextDay(new Date(), 6), "dd-MM-yyyy"),
  },
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

export function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// function getClosestDate(dayName, fromDate = new Date()) {
//   const dayMap = {
//     monday: nextMonday,
//     tuesday: nextTuesday,
//     wednesday: nextWednesday,
//     thursday: nextThursday,
//     friday: nextFriday,
//     saturday: nextSaturday,
//     sunday: nextSunday,
//   };

//   const getNextDay = dayMap[dayName()];
//   if (!getNextDay) throw new Error("Invalid day name");

//   return format(getNextDay(fromDate), "yyyy-MM-dd");
// }

export async function getUserRole(email) {
  await connectToDB();
  const user = await userModel.findOne({ email });
  return user.role;
}

export async function addUserToDB(session) {
  connectToDB();
  console.log(session);
  let user = await userModel.findOne({ email: session.email });
  !user
    ? (user = userModel.create({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }))
    : "user already in db";

  return user;
}
