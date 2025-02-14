"use client";

import Image from "next/image";
import RandomImage from "./RandomImage";

function AttendeeList({ attendeesList }) {
  attendeesList = JSON.parse(attendeesList);
  return (
    <div className="grid grid-cols-3 gap-2">
      {attendeesList.map((person) => {
        return (
          <div
            key={person._id}
            className="flex rounded-lg flex-col p-3 bg-white dark:bg-stone-800 gap-2 text-center items-center justify-center"
          >
            {/* {person.user_id?.image ? (
              <Image
                src={person.user_id?.image}
                width={80}
                height={64}
                alt={person.user_id.name}
                className="rounded-full overflow-clip aspect-square"
              />
            ) : (
              <RandomImage />
            )} */}
            <p>{person.user_id.email.split("@")[0]}</p>
            <p>{person.user_id.name || person.user_id.email.split("@")[0]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AttendeeList;
