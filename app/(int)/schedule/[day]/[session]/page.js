import { getAttendeesByDayAndSession } from "@/app/api/route";
import Container from "@/app/components/ui/Container";
import TitleBar from "@/app/components/ui/TitleBar";
import { auth } from "@/auth";
import AttendeeList from "@/app/components/ui/AttendeeList";
import { redirect } from "next/navigation";
import { JoinSessionModal } from "@/app/components/ui/JoinSessionModal";
import { getMyFutureSessions } from "@/app/api/get-my-sessions/route";

async function session({ params }) {
  const { day, session } = await params;
  const userSession = await auth();
  if (!userSession) redirect("/login");

  const future = await getMyFutureSessions(day, session, userSession.user.email);

  console.log(future);
  const info = {
    day,
    session,
    email: userSession.user.email,
  };

  future.forEach((session) => {
    if (session.day === info.day && session.name === info.session) {
      console.log(session);
    } else {
      console.log("nope");
    }
  });
  const attendees = await getAttendeesByDayAndSession(day, session);

  const attendeesList = attendees.reverse();

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
