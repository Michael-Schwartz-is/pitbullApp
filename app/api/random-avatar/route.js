import RandomImage, { getRandomImage } from "@/app/components/ui/RandomImage";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const image = await getRandomImage();

  return NextResponse.json({
    image,
  });
});
