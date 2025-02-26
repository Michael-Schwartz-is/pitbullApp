import { connectToDB, daysOfWeek, getUserRole } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import Container from "@/app/components/ui/Container";

// import { useState } from "react";
import SessionDeleteCard from "@/app/components/ui/SessionDeleteCard";
import { auth } from "@/auth";

// const [currSession, setCurrSession] = useState();

async function page() {
  const sess = await auth();
  const role = await getUserRole(sess.user.email);
  console.log("Role =>", role);

  const ScheduleList = await ScheduleModel.find({
    // active: { $ne: false },
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
        <div className="">
          <div className="overflow-clip gap-2">
            {daysOfWeek?.map((day) => (
              <>
                <h2 className="text-3xl py-9">{day.hebName}</h2>
                <div className="flex flex-wrap gap-2">
                  {ScheduleList.filter((d) => day.name === d.day).map((session) => {
                    return <SessionDeleteCard session={JSON.stringify(session)} />;
                  })}
                </div>
              </>
            ))}
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
