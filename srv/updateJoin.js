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
    console.log(err, "not fun at all!!");
  }
}

async function updateJoinDate() {
  await connectToDB();

  const users = await UserModel.find({});
  let i = 0;

  for (const user of users) {
    console.clear();
    console.log(`user ${i} of ${users.length} started`);
    SessionModel.find({ user_id: user._id });
    const oldest = await SessionModel.findOne({ user_id: user._id }).sort({ signup_timestamp: 1 });

    if (oldest) {
      const check = await UserModel.findOneAndUpdate(
        { _id: user._id },
        { $set: { created_at: oldest.signup_timestamp } }
      );
      i++;
      console.log(`User ${i} of ${users.length} updated`);
    }
  }
  mongoose.connection.close();
}

updateJoinDate();
