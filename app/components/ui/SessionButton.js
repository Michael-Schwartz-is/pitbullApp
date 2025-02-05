"use client";

import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

function SessionButton({ info, setOpen, open }) {
  const { day, session, email } = info;

  async function handleSessionSignup() {
    console.log(info);
    console.log(`${email} wants to join ${session} on ${day}`);
    // const res = await fetch("/api/join-session", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, day, session }),
    // });
  }

  return (
    <div>
      {!open && (
        <Button onClick={() => setOpen(true)} className="bg-orange-500 p-5">
          <Plus />
          להרשם לאימון
        </Button>
      )}
    </div>
  );
}

export default SessionButton;
