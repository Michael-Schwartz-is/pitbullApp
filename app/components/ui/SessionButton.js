"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pizza, Plus, ThumbsDown, X } from "lucide-react";
import { set } from "mongoose";

function SessionButton({ info, open, setOpen }) {
  const { attending } = info;
  // console.log("button attending", attending);
  return (
    <div>
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          className={cn("bg-orange-400 p-5", { "bg-red-600": attending })}
        >
          {attending ? (
            <>
              <X />
              לבטל הרשמה
            </>
          ) : (
            <>
              <Plus />
              להרשם לאימון
            </>
          )}
        </Button>
      )}
    </div>
  );
}

export default SessionButton;
