import { getAttendeesByDayAndSession } from "@/app/api/route";
import Container from "@/app/components/ui/Container";
import TitleBar from "@/app/components/ui/TitleBar";
import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import RandomImage from "@/app/components/ui/RandomImage";
import { JoinSessionModal } from "@/app/components/ui/JoinSessionModal";

async function session({ params }) {
  const userSession = await auth();
  if (!userSession) redirect("/login");
  const { day, session } = await params;

  const info = {
    day,
    session,
    email: userSession.user.email,
  };

  const attendeesList = await getAttendeesByDayAndSession(day, session);

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

          <div className="grid grid-cols-3 gap-2">
            {attendeesList.map((person) => {
              return (
                <div
                  key={person._id}
                  className="flex rounded-lg flex-col p-3 bg-white dark:bg-stone-800 gap-2 text-center items-center justify-center"
                >
                  {person.user_id?.image ? (
                    <Image
                      src={person.user_id?.image}
                      width={80}
                      height={64}
                      alt={person.user_id.name}
                      className="rounded-full overflow-clip aspect-square"
                    />
                  ) : (
                    <RandomImage />
                  )}

                  <p>{person.user_id.name || person.user_id.email.split("@")[0]}</p>
                </div>
              );
            })}
          </div>
        </div>
        <JoinSessionModal info={info} />
      </Container>
    </div>
  );
}
export default session;
