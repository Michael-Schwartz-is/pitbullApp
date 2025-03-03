import { auth } from "@/auth";
import { connectToDB } from "@/lib/utils";
import SessionModel from "@/models/SessionModel";
import userModel from "@/models/UsersModel";
import { NextResponse } from "next/server";

export async function getUserSessionHistory(email) {
  await connectToDB();
  const user = await userModel.findOne({ email });
  console.log("here", user);
  const histoy = await SessionModel.find({ user_id: user.id }).sort({ date: 1 });

  return {
    histoy,
  };
}

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
  const data = await getUserSessionHistory(req.auth.user.email);
  return NextResponse.json({
    data: data.histoy,
  });
});
