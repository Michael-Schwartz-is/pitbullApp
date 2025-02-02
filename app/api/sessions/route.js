import { getAttendeesByDayAndClass } from "../api";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  const { day, className } = await params;

  const sessions = getAttendeesByDayAndClass(day, className);

  return Response.json(sessions);
}
