import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { getAllFutureSessions } from "../get-my-sessions/route";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
  const sessions = await getAllFutureSessions();

  return NextResponse.json({
    sessions,
  });
});
