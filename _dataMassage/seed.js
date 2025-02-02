import ScheduleModel, { schedules } from "../models/ScheduleModel.js";
import SessionModel from "../models/SessionModel.js";
import UserModel from "../models/UsersModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection Successful!");
  } catch (err) {
    console.log(err);
  }
}

import fs from "fs";

async function seedSessions() {
  const sessions = JSON.parse(fs.readFileSync("./_test.json", "utf-8"));

  for (let i = 0; i < sessions.length; i++) {
    const session = sessions[i];
  }
}

async function seedSchedules() {
  await connectToDB();

  await ScheduleModel.deleteMany({});

  for (let i = 0; i < schedules.length; i++) {
    const schedule_item = schedules[i];

    const existing = await ScheduleModel.findOne({
      english_name: schedule_item.english_name,
      day: schedule_item.day,
    });

    if (existing) {
      console.log();
      console.log(`already exists:`);
      console.log(existing);
      console.log();
      continue;
    }

    try {
      await ScheduleModel.create(schedule_item);
      console.log(
        `Created Training No. ${i + 1} -- ${schedule_item.english_name}, ${schedule_item.day}`
      );
    } catch (error) {
      console.log(`Failed creating ${schedule_item.english_name}`);
      console.log(error);
    }
  }
}

seedSchedules();
// seedUsers();
