import { calcDayFromTimestamp, daysOfWeek } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import RandomGymImage from "./randomGymImage";

// let imageList = await RandomGymImage();

let imageList = [];

export function DaysOfWeek() {
  return (
    <div className="max-w-[30rem] w-full mx-auto grid grid-cols-2 gap-3">
      {daysOfWeek.map((day, i) => {
        return (
          <Link
            key={day.name}
            id="day_card"
            className=" relative  flex flex-col rounded-md basis-1/2 overflow-clip border bg-white dark:bg-stone-800 border-cyan-50 dark:border-cyan-50/0 md:hover:bg-orange-200 dark:md:hover:bg-orange-300  md:hover:text-orange-50 transition-colors"
            href={`/${day.name}`}
          >
            {/* <Image
              src={imageList[i]}
              width={400}
              height={400}
              className="h-[10rem] object-cover"
              alt="thing"
            /> */}

            <div className="p-2 flex flex-wrap justify-between w-full">
              <p className="text-sm text-orange-500 w-full font-semibold">
                {calcDayFromTimestamp(day.name).date}
              </p>
              <p className="font-bold ">{day.hebName}</p>
              <p>{day.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
