"use client";

import Image from "next/image";
import RandomImage from "./RandomImage";
import { getUserInfo } from "@/client/user/requests";
import { useGetRandomAvatar } from "@/client/images/requests";

function AttendeeList({ attendeesList }) {
  const user = getUserInfo();

  attendeesList = JSON.parse(attendeesList);

  const { data: randomImage } = useGetRandomAvatar();

  console.log(randomImage);

  return (
    <div className="grid grid-cols-3 gap-2">
      {attendeesList.map((person) => {
        return (
          <div
            key={person._id}
            className="flex rounded-lg flex-col p-3 bg-white dark:bg-stone-800 gap-2 text-center items-center justify-center relative"
          >
            {person.test && (
              <div className="bg-orange-800 px-1 text-xs text-white absolute bottom-0 left-0 rounded-lg">
                test
              </div>
            )}
            {person.user_id?.image ? (
              <Image
                src={person.user_id?.image}
                width={80}
                height={64}
                alt={person.user_id.name}
                className="rounded-full bg-cover aspect-square"
              />
            ) : (
              randomImage && (
                <Image
                  src={randomImage.image}
                  width={80}
                  height={64}
                  alt={person.user_id.name}
                  className="rounded-full bg-cover aspect-square"
                />
              )
            )}
            <p>{person.user_id.email.split("@")[0]}</p>
            <p>{person.user_id.name || person.user_id.email.split("@")[0]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AttendeeList;
