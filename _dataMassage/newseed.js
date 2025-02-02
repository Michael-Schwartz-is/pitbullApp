import dotenv from "dotenv";
import fs from "fs/promises"; // Use fs/promises for async file operations
import mongoose from "mongoose";
import SessionModel from "../models/SessionModel.js";
import userModel from "../models/UsersModel.js";
import ScheduleModel from "../models/ScheduleModel.js";

dotenv.config();

async function loadSessions() {
  try {
    const data = await fs.readFile("./_test.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("❌ Error reading _test.json:", error);
    process.exit(1);
  }
}

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to the database");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
}

async function seedSessions() {
  await connectToDB();
  const sessions = await loadSessions();

  try {
    await SessionModel.deleteMany({});
    console.log("🗑️  Cleared existing sessions");
  } catch (error) {
    console.error("❌ Error clearing sessions:", error);
    return;
  }

  const sessionPromises = sessions.map(async (session, i) => {
    try {
      const user = await userModel.findOne({ email: session.user_email });

      if (!user) {
        console.warn(`⚠️  Skipping session ${i}: No user found for ${session.user_email}`);
        return;
      }

      let schedule = await ScheduleModel.findOne({
        english_name: session.session,
        day: session.day,
      });

      if (!schedule) {
        console.log("📅  Creating new schedule...");

        const scheduleInfo = await ScheduleModel.findOne({ english_name: session.session });

        if (!scheduleInfo) {
          console.warn(`⚠️  Missing schedule info for ${session.session}. Skipping.`);
          return;
        }

        schedule = await ScheduleModel.create({
          english_name: session.session,
          day: session.day,
          time: session.session_date,
          emoji: scheduleInfo.emoji || "💪",
          heb_name: scheduleInfo.heb_name,
          active: false,
        });

        console.log("✅ Created new schedule:", schedule);
      }

      const newSession = {
        user_id: user._id,
        schedule_id: schedule._id,
        name: session.session,
        signup_timestamp: session.signup_timestamp,
        date: session.session_date,
        day: session.day,
      };

      await SessionModel.create(newSession);
      console.log(`✅ Created session ${i + 1}/${sessions.length}`);
    } catch (error) {
      console.error("❌ Error creating session:", error);
    }
  });

  await Promise.all(sessionPromises); // Wait for all sessions to be processed

  mongoose.connection.close(() => {
    console.log("🔌 Database connection closed");
  });
}

seedSessions();
