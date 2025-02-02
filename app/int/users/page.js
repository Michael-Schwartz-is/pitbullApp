import { auth } from "@/auth";
import { connectToDB } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import SessionModel from "@/models/SessionModel";

import userModel from "@/models/UsersModel";
import Image from "next/image";
import { use } from "react";

async function page() {
  const session = await auth();
  await connectToDB();

  const dbUser = await userModel.findOne({ email: session.user.email });

  const userHistory = await SessionModel.find({ user_id: dbUser._id })
    .populate("schedule_id")
    .populate("user_id")
    .then((userHistory) => {
      return userHistory;
    })
    .catch((err) => console.error(err));

  console.log(" this is =>", userHistory);

  return (
    <div>
      <h1></h1>

      {/* <div>
        {userHistory.map((item) => (
          <div>{item.date}</div>
        ))}
      </div> */}
      {/* <div className="flex flex-wrap gap-2 ">
        {dbUser.map((user) => (
          <div className="flex items-center w-[100px] p-4  flex-col bg-white gap-2">
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
      </div> */}
    </div>
  );
}
export default page;
