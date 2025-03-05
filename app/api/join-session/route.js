import { cap, connectToDB, daysOfWeek } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import SessionModel from "@/models/SessionModel";
import userModel from "@/models/UsersModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, day, session } = await request.json();

  const next = daysOfWeek.find((item) => item.name === day).next();

  try {
    await connectToDB();
    const user_id = await userModel.findOne({ email });
    const session_id = await ScheduleModel.findOne({ day: cap(day), english_name: session });
    const newSession = new SessionModel({
      user_id: user_id.id,
      schedule_id: session_id.id,
      name: session,
      date: next,
      day: cap(day),
      test: true,
    });

    const response = await newSession.save();

    return NextResponse.json({
      success: true,
      response: response,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: `error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const data = await req.json();
  const id = data.id;
  connectToDB();
  const response = await SessionModel.findByIdAndDelete(id);

  console.log(response);

  return NextResponse.json({
    id: id,
    response,
  });
}
