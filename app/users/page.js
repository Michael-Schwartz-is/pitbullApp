import Container from "@/app/components/ui/Container";
import { auth } from "@/auth";
import { connectToDB, getUserRole } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import SessionModel from "@/models/SessionModel";

import userModel from "@/models/UsersModel";
import Image from "next/image";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();
  if (!session) return redirect("/login");
  const role = await getUserRole(session.user.email);
  // if (role !== "admin") return redirect("/");

  await connectToDB();
  const allUsers = await userModel.find({});
  return (
    <Container width="l">
      <div className="py-8">
        <h1 className="text-3xl">כל המתאמנים במכון</h1>
        <div>{`סה"כ משתתפים:  ${allUsers.length} `}</div>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {allUsers.map((user) => (
          <div className="flex items-center w-[100px] p-4 flex-col  gap-2">
            {user.image && (
              <Image
                className="max-h-[80px] object-cover aspect-square rounded-full bg-contain"
                src={user.image}
                width={100}
                height={100}
                alt={user.name}
              />
            )}
            {user.name}
            <p className="text-xs">{user.email.split("@")[0]}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default page;
