import { useGetRandomImages } from "@/client/images/requests";
import { daysOfWeek } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function DaysOfWeekCards() {
  const { data: imageList } = useGetRandomImages();

  return (
    <div className="max-w-[30rem] w-full mx-auto grid grid-cols-2 gap-3">
      {daysOfWeek.map((day, i) => {
        return (
          <Link
            key={day.name}
            id="day_card"
            className="relative flex flex-col rounded-md basis-1/2 overflow-clip border bg-white dark:bg-stone-800 border-cyan-50 dark:border-cyan-50/0 md:hover:bg-orange-200 dark:md:hover:bg-orange-300  md:hover:text-orange-50 transition-colors"
            href={`/${day.name}`}
          >
            {imageList && (
              <Image
                src={imageList.images[i]}
                width={400}
                height={400}
                className="h-[10rem] object-cover"
                alt="thing"
              />
            )}

            <div className="p-2 flex flex-wrap justify-between w-full">
              <p className="text-sm text-orange-500 w-full font-semibold ">{day.next()}</p>

              <p className="font-bold ">{day.hebName}</p>
              <p className="capitalize">{day.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
