"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

function SessionDeleteCard({ session }) {
  session = JSON.parse(session);
  return (
    <div dir="rtl">
      <Card className="p-2">
        <div className="flex flex-col gap-2 min-w-[20rem] p-2">
          <p>{session.english_name}</p>
          <p>{session.heb_name}</p>
          <p>{session.day}</p>
          <p>{session.time}</p>
          <p>{session._id}</p>
          <>{!session.active && "archive"}</>
        </div>
        <div className="flex justify-end gap-2 p-2">
          <Button
          // onClick={() => toggleActiveSessionById(session._id)}
          >
            <Trash />
            <span className="ml-2">לארכב</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default SessionDeleteCard;
