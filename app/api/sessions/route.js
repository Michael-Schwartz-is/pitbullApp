import { getAttendeesByDayAndClass } from "../api";
import mongoose from "mongoose";

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection Successful!");
  } catch (err) {
    console.log(err);
  }
}

export async function GET(request, { params }) {
  const params = await params;
  const { day, className } = params;

  const sessions = getAttendeesByDayAndClass(day, className);

  return Response.json(sessions);
}
