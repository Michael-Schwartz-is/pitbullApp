"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function SessionButton({ info }) {
  const { day, session, userSession } = info;

  function handleSessionSignup() {
    console.log(`${info.userSession} wants to join ${session} on ${day}`);
  }

  return (
    <div className="fixed flex items-center w-full bottom-[80px]">
      <Button className="bg-orange-500 mx-auto p-5" onClick={() => handleSessionSignup()}>
        <Plus />
        להרשם לאימון זה
      </Button>
    </div>
  );
}

export default SessionButton;
