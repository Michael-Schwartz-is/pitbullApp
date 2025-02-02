import { getAttendeesByDayAndSession } from "@/app/api/route";
import Container from "@/app/components/ui/Container";
import SessionButton from "@/app/components/ui/SessionButton";
import TitleBar from "@/app/components/ui/TitleBar";
import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import RandomImage from "@/app/components/ui/RandomImage";

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

  // console.log("funnn =>>>", await getAttendeesByDayAndSession(day, session));

  return (
    <div className="">
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <SessionButton info={info} />
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
                  className="flex flex-col p-3 bg-white hover:bg-orange-100 gap-2 items-center"
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
      </Container>
    </div>
  );
}
export default session;
