import { NextResponse } from "next/server";
import { addBookingToSession, getAllFutureSessions } from "../route";
import { auth } from "@/auth";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
  const data = await getAllFutureSessions();
  return NextResponse.json({
    data,
    req,
  });
});

// export async function POST(request) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData.entries());

//   const name = formData.get("name");
//   const email = formData.get("email");

//   console.log(name);

//   return NextResponse.json({
//     name,
//     email,
//   });
// }
