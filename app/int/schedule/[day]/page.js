import Link from "next/link";
import Image from "next/image";
import trainImage from "../../../assets/train.jpg";
import TitleBar from "@/app/components/ui/TitleBar";
import Container from "@/app/components/ui/Container";
import { getSessionsByDay } from "@/app/api/route";
import { daysOfWeek } from "../page";

async function trainingDay({ params }) {
  const { day } = await params;

  const today = daysOfWeek.find((d) => d.name === day);
  const sessions = await getSessionsByDay(day);

  return (
    <Container>
      <div className="max-w-[30rem] mx-auto">
        <TitleBar title={`אימונים ליום ${today.hebName}`} />
        <div className="flex flex-col gap-2">
          {sessions.map((session) => {
            return (
              <Link
                key={session._id}
                className="flex p-4 gap-3 bg-white dark:bg-stone-800 md:hover:bg-orange-200 dark:md:hover:bg-orange-400 transition-colors"
                href={`/int/schedule/${day}/${session.english_name}`}
              >
                <Image
                  src={trainImage}
                  className="rounded-full overflow-clip"
                  width={50}
                  height={50}
                  alt="thing"
                />
                <div>
                  <div className="font-bold">{`${session.english_name} ${session.emoji} ${session.heb_name}`}</div>
                  <div>{session.time}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
export default trainingDay;
