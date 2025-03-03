import { calcDayFromTimestamp, connectToDB } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import SessionModel from "@/models/SessionModel";
import userModel from "@/models/UsersModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, day, session } = await request.json();
  const next = calcDayFromTimestamp(new Date(), day);

  console.log("here", next);

  try {
    await connectToDB();
    const user_id = await userModel.findOne({ email });
    const session_id = await ScheduleModel.findOne({ day: day, english_name: session });
    const newSession = new SessionModel({
      user_id: user_id._id,
      schedule_id: session_id._id,
      name: session,
      date: next,
      day: day,
      test: true,
    });

    await newSession.save();

    return NextResponse.json({
      success: true,
      message: { newSession },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `error: ${error.message}`,
    });
  }
}
