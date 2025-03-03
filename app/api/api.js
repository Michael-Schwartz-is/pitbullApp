import { connectToDB } from "@/lib/utils";
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

export async function getUserSessionHistory(user_email) {
  connectToDB();
  const findUser = await userModel.findOne({ email: user_email });
  // find and sort past sessions
  const pastSessions = await SessionModel.find({ user_id: findUser._id })
    .sort({ date: 1 })
    .populate("schedule_id");

  return pastSessions;
}
