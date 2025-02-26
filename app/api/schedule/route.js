import { NextResponse } from "next/server";
import { addBookingToSession, getAllFutureSessions } from "../route";
import { auth } from "@/auth";
import { get } from "http";

// auth() && get(req)

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

// export const GETII(req){
//   if (!auth()) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
//   const data = await getAllFutureSessions();
//   return NextResponse.json({
//     data,
//     req,
//   });
//
// }

export async function POST(request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const name = formData.get("name");
  const email = formData.get("email");

  console.log(name);

  return NextResponse.json({
    name,
    email,
  });
}

// export const POST = auth(async function POST(req) {
//   if (!req.auth) {
//     return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
//   }
//   try {
//     const { day, session, email } = await req.json();

//     const result = await addBookingToSession({ day, session, email });

//     return NextResponse.json({ message: "Action performed", data: result });
//   } catch (error) {
//     console.error("Error in POST:", error);
//     return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
//   }
// });
