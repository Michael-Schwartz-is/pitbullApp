import { auth } from "@/auth";
import { LifeBuoyIcon } from "lucide-react";
import Image from "next/image";

export default async function SignIn() {
  const session = await auth();
  let user = session?.user;

  return user ? (
    <div className="flex  flex-col items-center text-xs" href={"/int/profile"}>
      {user.image ? (
        <Image src={user.image} width={24} height={24} alt={user.name} className="rounded-full" />
      ) : (
        <div className="rounded-full bg-stone-700 w-6 h-6">
          <LifeBuoyIcon />
        </div>
      )}
      אני
    </div>
  ) : (
    <div>nothing</div>
  );
}
