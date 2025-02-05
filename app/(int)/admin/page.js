import { connectToDB, getUserRole } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import { daysOfWeek } from "../schedule/page";
import Container from "@/app/components/ui/Container";

// import { useState } from "react";
import SessionDeleteCard from "@/app/components/ui/SessionDeleteCard";
import DeleteSessionBtn from "@/app/components/ui/DeleteSessionBtn";
import SessionModel from "@/models/SessionModel";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

// const [currSession, setCurrSession] = useState();

async function page() {
  const sess = await auth();
  const role = await getUserRole(sess.user.email);
  console.log("Role =>", role);

  const ScheduleList = await ScheduleModel.find({
    active: { $ne: false },
  });

  console.log(ScheduleList.length);
  // .then((docs) => {
  //   docs.forEach((doc) => {
  //     console.log(`updating doc: ${doc}`);
  //     doc.active === false;
  //     doc.save().catch((err) => console.log(`save error: ${err}`));
  //   });
  // });

  return (
    <div>
      <Container width="xl">
        <div className="flex">
          <div className="grid grid-cols-2 overflow-clip gap-2">
            {daysOfWeek?.map((day) =>
              ScheduleList.filter((d) => day.name === d.day).map((session) => {
                return <SessionDeleteCard session={JSON.stringify(session)} />;
              })
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
export default page;

export async function toggleActiveSessionById(_id) {
  await connectToDB();
  const deactivateSession = await ScheduleModel.findOne({ _id }).then((doc) => {
    doc.active === !active;
    doc.save();
    console.log(doc);
  });
}
