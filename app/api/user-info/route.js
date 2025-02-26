import { auth } from "@/auth";
import { addUserToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const user = await addUserToDB(req.auth.user);

  return NextResponse.json({
    name: user.name,
    email: user.email,
    role: user.role,
    id: user._id,
    image: user.image,
    updated_image: user.updated_image,
  });
});
