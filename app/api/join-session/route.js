import { connectToDB } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import SessionModel from "@/models/SessionModel";
import userModel from "@/models/UsersModel";

export async function PUT(request) {
  const { email, day, session, next } = await request.json();

  try {
    await connectToDB();
    const user_id = await userModel.findOne({ email });
    const session_id = await ScheduleModel.findOne({ day: day, session: session });
    const neeSession = await SessionModel.create({ user_id, session_id, day, date: next });
    return Response.json({ user_id, session_id, day, date: next });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 400 });
  }
}
