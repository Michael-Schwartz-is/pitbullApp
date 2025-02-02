"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function SessionButton({ info }) {
  const { day, session, email } = info;

  async function handleSessionSignup() {
    console.log(info);
    console.log(`${email} wants to join ${session} on ${day}`);
    const res = await fetch("/api/join-session", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, day, session }),
    });
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
