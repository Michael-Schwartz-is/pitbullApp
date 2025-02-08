import { connectToDB } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import SessionModel from "@/models/SessionModel";
import userModel from "@/models/UsersModel";

export async function getAttendeesByDayAndSession(day, session) {
  await connectToDB();
  const now = new Date();
  const attendeesList = await SessionModel.find({
    name: session,
    day: day,
    // date: { $gte: now },
  })
    .populate("schedule_id")
    .populate("user_id");

  return attendeesList.map((a) => a.toObject());
}

export async function getSessionsByDay(day) {
  await connectToDB();
  const ScheduleList = await ScheduleModel.find({
    day: day,
    active: { $ne: false },
  }).lean();

  // return ScheduleList.map((a) => a.toObject());
  return ScheduleList.map((a) => ({ ...a, _id: a._id.toString() }));
}
