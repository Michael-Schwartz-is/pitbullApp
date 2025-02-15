import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Container from "@/app/components/ui/Container";
import { addUserToDB } from "@/lib/utils";
import { DaysOfWeek } from "@/app/components/ui/DaysOfWeek";
import { getAllFutureSessions } from "@/app/api/route";

async function Train() {
  const session = await auth();
  if (!session) redirect("/login");
  const userData = await addUserToDB(session);
  const allSessions = await getAllFutureSessions();

  return (
    <>
      <main>
        <Container>
          <div className="max-w-[30rem] mb-8 mx-auto">
            <h1 className="text-2xl font-bold ">לוז אימונים</h1>
            <p>שלום {session.user.name.split(" ")[0]}!</p>
          </div>
          <DaysOfWeek />
        </Container>
      </main>
    </>
  );
}
export default Train;
