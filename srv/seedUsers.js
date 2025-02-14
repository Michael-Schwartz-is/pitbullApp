import UserModel from "../models/UsersModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Papa from "papaparse";

dotenv.config();

const users = JSON.parse(fs.readFileSync("./_test.json"));

const userExtra = JSON.parse(fs.readFileSync("./_test.json"));

const parsedExtra = Papa.parse(file);

// const countUniques = (users) => new Set(users.map((user) => user[user_email])).size;

function getUniqueObjects(users) {
  const seenEmails = new Set();
  const uniqueObjects = [];

  for (let i = 0; i < users.length; i++) {
    if (!seenEmails.has(users[i]["user_email"])) {
      seenEmails.add(users[i]["user_email"]);
      uniqueObjects.push(users[i]);
    }
  }

  return uniqueObjects;
}
const countedValue = getUniqueObjects(users);

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection Successful!");
  } catch (err) {
    console.log(err, "not fun at all!!");
  }
}

async function seedUsers() {
  await connectToDB();

  await UserModel.deleteMany({});

  for (let i = 0; i < countedValue.length; i++) {
    const user_item = countedValue[i];

    const userWeHave = {
      email: user_item.user_email,
      name: user_item.name,
    };

    {
      const existing = await UserModel.findOne({
        name: userWeHave.name,
        email: userWeHave.email,
      });

      if (existing) {
        console.log();
        console.log(`already exists:`);
        console.log(existing);
        console.log("exist top ");
        console.log(user_item);
        console.log();
        continue;
      }
    }
    try {
      await UserModel.create(userWeHave);
      console.log(`Created ${userWeHave.name}`);
    } catch (error) {
      console.log(`Failed creating ${userWeHave.name}`);
      console.log(error);
      console.log(userWeHave);
    }
  }
  const count = await UserModel.countDocuments();
  //   console.log("users in db ==> ", count);
}
// console.log("uniques in json ==> ", countedValue.length);

// seedUsers();

async function updateUserImages(userModel, imagesList) {
  for (const imageRecord of imagesList) {
    const { email, image, role } = imageRecord;

    const result = await userModel.updateOne({ user_email: email }, { $set: { image, role } });

    console.log(
      `Matched ${result.matchedCount} document(s), Updated ${result.modifiedCount} document(s) for email: ${email}`
    );
  }
}
