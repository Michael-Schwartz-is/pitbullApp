import { RandomGymImage } from "@/app/components/ui/randomGymImage";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  // if (!req.auth) {
  //   return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  // }

  const images = await RandomGymImage();

  return NextResponse.json({
    images,
  });
});
