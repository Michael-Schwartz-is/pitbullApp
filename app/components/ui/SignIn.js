import { auth } from "@/auth";
import Image from "next/image";

export default async function SignIn() {
  const session = await auth();
  let user = session?.user;

  return user ? (
    <div className="flex  flex-col items-center text-xs" href={"/int/profile"}>
      <Image src={user.image} width={24} height={24} alt={user.name} className="rounded-full" />
      אני
    </div>
  ) : (
    <div>nothing</div>
  );
}
