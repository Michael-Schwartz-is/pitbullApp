import { NextResponse } from "next/server";
import { getAllActiveSchedule } from "../route";
import { auth } from "@/auth";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
  const data = await getAllActiveSchedule();
  return NextResponse.json({
    data,
    req,
  });
});
