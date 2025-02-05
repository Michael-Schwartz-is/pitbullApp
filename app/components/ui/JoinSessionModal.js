"use client";

import { Button } from "@/components/ui/button";
import SessionButton from "./SessionButton";
import { useState } from "react";

export const JoinSessionModal = ({ info }) => {
  const { day, session, email } = info;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleUserReg = (info) => {
    console.log(`${email} wants to join ${session} on ${day}`);
    setOpen(!open);
  };

  return (
    <div>
      <div className="fixed bottom-[80px] mx-auto w-full left-0 flex justify-center z-50">
        <SessionButton
          info={info}
          setOpen={setOpen}
          open={open}
          onClick={() => {
            setOpen(true);
          }}
        />
        {open && (
          <div className="flex fixed top-0 left-0 items-center justify-center h-full w-full">
            <div
              onClick={toggleOpen}
              className="flex items-center bg-stone-900/70 justify-center right-0 top-0 w-full h-full"
            ></div>
            <div className="p-6 text-stone-300 bg-stone-900 flex flex-col gap-4 text-center justify-center fixed  z-30">
              <p className="text-3xl"> להרשם לאימון ?</p>
              <div className="text-orange-500 text-sm">
                <p>{`שיעור: ${day} / ${session}`}</p>
                <p className="opacity-55">{info.email}</p>
              </div>
              <p> לחץ לאישור בשביל להרשם לשיעור הזה</p>
              <Button onClick={() => handleUserReg(info)}>אני נרשמת</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
