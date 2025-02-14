import dotenv from "dotenv";
import fs from "fs";
import SessionModel from "../models/SessionModel.js";
import userModel from "../models/UsersModel.js";
import ScheduleModel from "../models/ScheduleModel.js";
import mongoose from "mongoose";

dotenv.config();
const sessions = JSON.parse(fs.readFileSync("./_test.json"));

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection Successful!");
  } catch (err) {
    console.log(err, "not fun at all!!");
  }
}

async function seedSessions() {
  await connectToDB();

  await SessionModel.deleteMany({});

  for (let i = 0; i < sessions.length; i++) {
    const session = sessions[i];
    const user = await userModel.findOne({ email: session.user_email });
    let schedule = await ScheduleModel.findOne({
      english_name: session.session,
      day: session.day,
    });

    if (!schedule) {
      console.log("creating session!");

      let scheduleInfo = await ScheduleModel.findOne({ english_name: session.session });

      console.log("SCHEDULE ==>", session);
      let emoji = scheduleInfo.emoji || "💪";

      schedule = await ScheduleModel.create({
        english_name: session.session,
        day: session.day,
        time: session.session_date,
        emoji: emoji,
        heb_name: scheduleInfo.heb_name,
        active: false,
      });

      console.log("NEW SCHEDULE (OLD)", schedule);
    }

    let newSession = {
      user_id: user._id,
      schedule_id: schedule._id,
      name: session.session,
      signup_timestamp: session.signup_timestamp,
      date: session.session_date,
      day: session.day,
    };
    try {
      await SessionModel.create(newSession);
      console.log(`Created session No. ${i} of ${sessions.length}`);
    } catch (error) {
      console.log(error);
      console.log("SESSION", session);
      console.log("SCHEDULE", schedule);
      console.log("NEW SESSION", newSession);
    }
  }
}

seedSessions();

// async function query() {
//   await connectToDB();
//   const Schedule = await ScheduleModel.findOne({ english_name: "Basics", day: "Sunday" });
//   console.log(Schedule._id);
// }

// query();
