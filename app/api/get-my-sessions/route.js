"use server";

import { connectToDB } from "@/lib/utils";
import SessionModel from "@/models/SessionModel";
import userModel from "@/models/UsersModel";

export async function getMyFutureSessions(email) {
  await connectToDB();
  const now = new Date();
  const user = await userModel.findOne({ email });
  const user_id = user?._id;
  const attendeesList = await SessionModel.find({
    user_id: user_id,
    date: { $gte: now },
  }).populate("schedule_id");

  return attendeesList.map((a) => a.toObject());
}

export async function getAllFutureSessions(day, session, email) {
  await connectToDB();
  const now = new Date();
  const attendeesList = await SessionModel.find({
    date: { $gte: now },
  })
    .populate("schedule_id")
    .populate("user_id");

  return attendeesList.map((a) => a.toObject());
}
