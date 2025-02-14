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

  return ScheduleList.map((a) => ({ ...a, _id: a._id.toString() }));
}

export async function getAllFutureSessions() {
  await connectToDB();
  const ScheduleList = await SessionModel.find({
    date: { $gte: new Date() },
  }).lean();

  // return ScheduleList.map((a) => a.toObject());
  return ScheduleList.map((a) => ({ ...a, _id: a._id.toString() }));
}

export async function addBookingToSession({ day, session, email }) {
  await connectToDB();
  const user = await userModel.findOne({ email });
  const schedule = await ScheduleModel.findOne({ english_name: session, day: day });

  // const newSession = new SessionModel({
  //   schedule_id: schedule._id,
  //   user_id: user._id,
  //   session: schedule.name,
  //   date: calcDayFromTimestamp(day).date,
  //   day: schedule.day,

  //   date: new Date(),
  // });
  // await newSession.save();
  // return newSession;

  return {
    user,
    schedule,
  };
}

// AUTH AND CRUD OPERATIONS
// --------------------------------
// add booking to session list
// allow users to add image and update their email or change their name
// automatocally (progressively) update the user's name and email from social auth.
// social login (already in place) login with email and password
// bcrypt the password and decrypt it when needed.
