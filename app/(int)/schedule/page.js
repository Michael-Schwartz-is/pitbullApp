import Image from "next/image";
import trainImage from "../../assets/train.jpg";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Container from "@/app/components/ui/Container";
import RandomGymImage from "@/app/components/ui/randomGymImage";

export const daysOfWeek = [
  { name: "Sunday", hebName: "ראשון" },
  { name: "Monday", hebName: "שני" },
  { name: "Tuesday", hebName: "שלישי" },
  { name: "Wednesday", hebName: "רביעי" },
  { name: "Thursday", hebName: "חמישי" },
  { name: "Friday", hebName: "שישי" },
  { name: "Saturday", hebName: "שבת" },
];

async function Train() {
  const session = await auth();
  if (!session) redirect("/login");
  const randomImage = await RandomGymImage();
  let randomList = [];
  return (
    <>
      <main>
        <Container>
          <div className="max-w-[30rem] mb-8 mx-auto">
            <h1 className="text-2xl font-bold ">לוז אימונים</h1>
            <p>שלום {session.user.name.split(" ")[0]}!</p>
          </div>
          <div id="wrapper_day_card">
            <div className="max-w-[30rem] w-full mx-auto grid grid-cols-2 gap-3">
              {daysOfWeek.map((day) => {
                function getAndLogRandomValue() {
                  const value = Math.floor(Math.random() * randomImage.length);
                  if (randomList.some((li) => li === value)) {
                    return getAndLogRandomValue();
                  } else {
                    randomList.push(value);
                    return randomImage[value];
                  }
                }

                const imageItem = getAndLogRandomValue();
                return (
                  <div className="">
                    <Link
                      id="day_card"
                      className=" relative  flex flex-col rounded-md basis-1/2 overflow-clip border bg-white dark:bg-stone-800 border-cyan-50 dark:border-cyan-50/0 md:hover:bg-orange-200 dark:md:hover:bg-orange-500 transition-colors"
                      href={`/schedule/${day.name}`}
                    >
                      <Image
                        src={imageItem}
                        width={400}
                        height={400}
                        className="h-[10rem] object-cover"
                        alt="thing"
                      />

                      <div className="p-2 flex flex-wrap justify-between w-full">
                        <p className="font-bold ">{day.hebName}</p>
                        <p>{day.name}</p>

                        <p className="text-sm  w-full font-light">האימון הבא {day.hebName}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
export default Train;
