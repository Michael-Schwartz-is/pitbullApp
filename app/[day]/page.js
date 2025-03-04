"use client";

import Link from "next/link";
import TitleBar from "@/app/components/ui/TitleBar";
import Container from "@/app/components/ui/Container";
import { cap, daysOfWeek } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useGetAllFeatureSessions } from "@/client/sessions/sessions";
import { useGetActiveSchedule } from "@/client/schedule/schedule";
import { useIsAuthenticated } from "@/hooks/is-authenticated";

function trainingDay() {
  useIsAuthenticated();

  const { day } = useParams();
  const { data: todaySchedule } = useGetActiveSchedule(cap(day));
  const today = daysOfWeek.find((d) => d.name === day);

  console.log(todaySchedule);

  return (
    <Container>
      <div className="max-w-[30rem] mx-auto">
        <TitleBar title={`אימונים ליום ${today?.hebName}`} subText={today.next()} />
        <div className="flex flex-col gap-2">
          {todaySchedule?.map((session) => {
            return (
              <Link
                key={session._id}
                className="flex p-4 gap-3 bg-white dark:bg-stone-800 md:hover:bg-orange-200 dark:md:hover:bg-orange-400 transition-colors"
                href={`/${day}/${session.english_name}`}
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
