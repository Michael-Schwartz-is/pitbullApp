"use client";

import { Button } from "@/components/ui/button";
import SessionButton from "./SessionButton";
import { useState } from "react";
import { useAddUserToTraining, useGetAllFeatureSessions } from "@/client/sessions/sessions";

export const JoinSessionModal = ({ info }) => {
  const { day, session, email, attending } = info;
  const addUserToTrainig = useAddUserToTraining();
  const [open, setOpen] = useState(false);
  const { data: allFutureSessions } = useGetAllFeatureSessions();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const checkAttending = () => {};

  function handleUserReg() {
    addUserToTrainig.mutate({ email, day, session });
    setOpen(false);
  }

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
              <p className="text-3xl">{attending ? "למחוק אותך מהאימון?" : `להרשם לאימון ?`}</p>
              <div className="text-orange-500 text-sm">
                <p>{`שיעור: ${day} / ${session}`}</p>
                <p className="opacity-55">{info.email}</p>
              </div>
              <p>
                {attending
                  ? `לחץ לאישור בשביל לבטל את ההרשמה `
                  : `לחץ לאישור בשביל להרשם לשיעור הזה`}
              </p>
              <Button onClick={() => handleUserReg()}>
                {attending ? `לא אגיע לאימון` : `אני נרשמת`}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
