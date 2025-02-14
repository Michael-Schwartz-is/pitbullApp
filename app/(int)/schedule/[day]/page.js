import Link from "next/link";
import Image from "next/image";
import TitleBar from "@/app/components/ui/TitleBar";
import Container from "@/app/components/ui/Container";
import { getSessionsByDay } from "@/app/api/route";
import { calcDayFromTimestamp, daysOfWeek } from "@/lib/utils";

async function trainingDay({ params }) {
  const { day } = await params;

  const today = daysOfWeek.find((d) => d.name === day);
  const sessions = await getSessionsByDay(day);
  const nextSessionDate = calcDayFromTimestamp(day);
  console.log(nextSessionDate);

  return (
    <Container>
      <div className="max-w-[30rem] mx-auto">
        <TitleBar title={`אימונים ליום ${today.hebName}`} subText={nextSessionDate.date} />
        <div className="flex flex-col gap-2">
          {sessions.map((session) => {
            return (
              <Link
                key={session._id}
                className="flex p-4 gap-3 bg-white dark:bg-stone-800 md:hover:bg-orange-200 dark:md:hover:bg-orange-400 transition-colors"
                href={`/schedule/${day}/${session.english_name}`}
              >
                <div className="flex flex-col gap-1">
                  <div className="font-bold text-lg">{`
                  ${session.heb_name}
                  ${session.emoji}
                  ${session.english_name}
                    `}</div>
                  <div className="text-sm">{session.time}</div>
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
