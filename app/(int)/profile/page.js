import Image from "next/image";
import { getUserSessionHistory } from "../../api/api";
import Container from "../../components/ui/Container";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import RandomImage from "@/app/components/ui/RandomImage";
import ModeToggle from "@/components/mode-toggle";
import { getMyFutureSessions } from "@/app/api/get-my-sessions/route";

async function Profile() {
  const { user } = await auth();
  if (!user) return redirect("/login");
  const userSessions = await getUserSessionHistory(user.email);
  const futureSessions = await getMyFutureSessions(user.email);
  const firstSession = new Date(userSessions[0].date);

  async function formattedSessions(userSessions) {
    //count session occurances
    // const countSessions = await userSessions.reduce((total, sess) => {
    //   const { session } = sess;
    //   total[session] = (total[session] || 0) + 1;
    //   return total;
    // }, {});

    //sort
    const sorted = Object.entries(countSessions).sort(([, a], [, b]) => b - a);

    const topFour = sorted.slice(0, 3);
    console.log(topFour);
    const rest = sorted.slice(3).reduce((sum, [, value]) => sum + value, 0);
    if (rest > 0) topFour.push(["Other", rest]);

    return topFour;
  }

  const sortedSessions = userSessions.sort(
    (a, b) => new Date(b.session_date) - new Date(a.session_date)
  );

  const sessionList = sortedSessions.map((session) => (
    <li key={session.email}>
      <div className="flex justify-between p-4 bg-white shadow-sm items-center dark:bg-stone-800 shadow-stone-100 dark:border-transparent dark:shadow-stone-100/0">
        <div className="felx flex-col">
          <p className="font-bold">{session.schedule_id.heb_name}</p>
          <p className="text-sm">{session.day}</p>
        </div>
        <p className=" text-sm">
          {new Date(session.date).toLocaleString("default", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </li>
  ));

  return (
    <div>
      <div className="fixed z-50 px-4 top-0 w-full flex justify-between items-center">
        <ModeToggle />

        <div className="">
          <form
            className="p-4"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button variant="outline" type="submit">
              Logout
            </Button>
          </form>
        </div>
      </div>
      <Container>
        <div>
          {user.image ? (
            <Image
              src={user.image}
              width={100}
              height={100}
              className="aspect-square object-cover rounded-full mx-auto"
              alt={user.name}
            />
          ) : (
            <RandomImage update={!userData.user.image} width={100} height={100} />
          )}
          <div className="text-center gap-2 flex items-center flex-col mx-auto">
            <p className="text-2xl font-bold">{user.name}</p>
            <p>{`${sessionList.length} sessions`}</p>
            <p className="text-sm py-1 px-3 rounded-md border dark:border-transparent border-stone-200 bg-orange-100 dark:bg-stone-800">
              {`Member Since `}
              <span className="font-bold text-stone-600">
                {`${firstSession.toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                })}`}
              </span>
            </p>

            <div className="flex justify-center flex-wrap gap-2 py-6">
              {Object.entries(formattedSessions()).map(([, value]) => {
                return (
                  <p className="p-2 rounded-md border dark:border-transparent border-stone-100 text-stone-400 font-bold text-sm uppercase  dark:bg-stone-800 bg-white">
                    {value[0]} - {value[1]}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* <Component chartData={chartData} /> */}
        <ul className="flex flex-col gap-2" key={sessionList.email}>
          {sessionList}
        </ul>
      </Container>
    </div>
  );
}

export default Profile;
