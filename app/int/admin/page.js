import { connectToDB } from "@/lib/utils";
import ScheduleModel from "@/models/ScheduleModel";
import { daysOfWeek } from "../schedule/page";
import Container from "@/app/components/ui/Container";

// import { useState } from "react";
import SessionDeleteCard from "@/app/components/ui/SessionDeleteCard";
import DeleteSessionBtn from "@/app/components/ui/DeleteSessionBtn";

// const [currSession, setCurrSession] = useState();

async function page() {
  await connectToDB();
  const sessionList = await ScheduleModel.find({});

  return (
    <div>
      <Container>
        <div dir="ltr">
          {daysOfWeek.map((day) =>
            sessionList
              .filter((d) => day.name === d.day)
              .map((session) => {
                return (
                  <div className="mb-4">
                    <SessionDeleteCard session={session} />
                    {/* <DeleteSessionBtn session={session} /> */}
                  </div>
                );
              })
          )}
        </div>
      </Container>
    </div>
  );
}
export default page;
