import Link from "next/link";
import Image from "next/image";
import trainImage from "../../../assets/train.jpg";
import TitleBar from "@/app/components/ui/TitleBar";
import Container from "@/app/components/ui/Container";
import { getSessionsByDay } from "@/app/api/route";

async function trainingDay({ params }) {
  const { day } = await params;

  const sessions = await getSessionsByDay(day);

  return (
    <Container>
      <div className="max-w-[30rem] mx-auto">
        <TitleBar title={day} />
        <div className="flex flex-col gap-2">
          {sessions.map((session) => {
            return (
              <Link
                key={session._id}
                className="flex p-4 gap-3 bg-white md:hover:bg-orange-200 transition-colors"
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
                  <div className="font-bold text-stone-700">{`${session.english_name} ${session.emoji} ${session.heb_name}`}</div>
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
