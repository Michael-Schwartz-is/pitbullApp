import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Secret() {
  const session = await auth();
  if (!session) return redirect("/login");
}
