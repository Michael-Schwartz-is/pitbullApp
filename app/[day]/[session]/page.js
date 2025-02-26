"use client";

import Container from "@/app/components/ui/Container";
import TitleBar from "@/app/components/ui/TitleBar";
import AttendeeList from "@/app/components/ui/AttendeeList";
import { redirect, useParams } from "next/navigation";
import { JoinSessionModal } from "@/app/components/ui/JoinSessionModal";
import { getMyFutureSessions } from "@/app/api/get-my-sessions/route";
import { auth } from "@/auth";
import { useGetAllFeatureSessions } from "@/api/sessions/sessions";
import { useGetUserInfo } from "@/api/user/user";

async function session() {
  const { day, session } = useParams();
  const userSession = auth();
  if (!userSession) redirect("/login");
  console.log(userSession);

  // const future = getMyFutureSessions(day, session, userSession?.user?.email);

  const { data: attendeesList } = useGetAllFeatureSessions();
  const { data: userData } = useGetUserInfo();

  // const info = {
  //   day,
  //   session,
  //   email: userSession.user.email,
  // };

  // const attendees = await getAttendeesByDayAndSession(day, session);

  // const attendeesList = attendees.reverse();

  return (
    <div>
      <Container>
        <div className="gap-4 max-w-[30rem] mx-auto">
          <TitleBar
            title={`${day} / ${session
              .split("_")
              .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
              .join(" ")}`}
            subText={`נותרו ${20 - attendeesList.length} מקומות פנויים `}
          />

          <AttendeeList attendeesList={JSON.stringify(attendeesList)} />
        </div>
        <JoinSessionModal info={info} />
      </Container>
    </div>
  );
}

export default session;
