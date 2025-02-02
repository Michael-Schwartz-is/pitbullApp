import UserModel from "../models/UsersModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Papa from "papaparse";
dotenv.config();

const imagesList = Papa.parse(fs.readFileSync("./_dataMassage/csv/enr.csv", "utf-8"));

let usersWImages = [];
function usersObjMaker(imagesList) {
  for (let i = 1; i < imagesList.data.length; i++) {
    const user = {
      user_email: imagesList.data[i][1],
      image: imagesList.data[i][2],
      name: imagesList.data[i][0],
    };
    usersWImages.push(user);
  }
}

usersObjMaker(imagesList);

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

    {
      const existing = await UserModel.findOne({
        email: userWeHave.email,
      });
    }
  }
}
// console.log(usersWImages);

async function updateUserImages() {
  await connectToDB();
  for (const imageRecord of usersWImages) {
    const { user_email, image, name } = imageRecord;
    const result = await UserModel.updateOne({ email: user_email }, { $set: { image, name } });

    console.log(
      `Matched ${result.matchedCount} document(s), Updated ${result.modifiedCount} document(s) for email: ${user_email}`
    );
  }
}

updateUserImages();
