"use client";

import Container from "@/app/components/ui/Container";
import TitleBar from "@/app/components/ui/TitleBar";
import AttendeeList from "@/app/components/ui/AttendeeList";
import { useParams } from "next/navigation";
import { JoinSessionModal } from "@/app/components/ui/JoinSessionModal";
import { useGetAllFeatureSessions } from "@/client/sessions/sessions";
import { useGetUserInfo } from "@/client/user/user";
import { useIsAuthenticated } from "@/hooks/is-authenticated";
import { useEffect, useState } from "react";
import { cap } from "@/lib/utils";
import { Loader } from "lucide-react";
import { set } from "mongoose";

export default function Session() {
  useIsAuthenticated();

  const [attending, setAttending] = useState(false);
  const { day, session } = useParams();
  const { data: allFutureSessions, isLoading } = useGetAllFeatureSessions();
  const { data: userData } = useGetUserInfo();

  const info = {
    day: day,
    session,
    email: userData?.email,
    attending,
  };

  const today = cap(day);

  const attendeesList =
    allFutureSessions?.sessions?.filter((s) => s.day === today && s.name === session).reverse() ||
    [];

  const id = attendeesList.find((a) => a.user_id.email === userData?.email)?._id;

  useEffect(() => {
    setAttending(attendeesList.some((a) => a.user_id.email === userData?.email));
  }, [attendeesList, userData]);

  return (
    <div>
      <Container>
        <div className="gap-4 max-w-[30rem] mx-auto">
          <TitleBar
            title={`${today} / ${session
              .split("_")
              .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
              .join(" ")}`}
            subText={`נותרו ${20 - attendeesList?.length} מקומות פנויים `}
          />
          {!!attendeesList?.length && (
            <AttendeeList attendeesList={JSON.stringify(attendeesList)} />
          )}
          {isLoading && (
            <p className="text-2xl">
              {" "}
              <Loader /> טוען...
            </p>
          )}
        </div>
        <JoinSessionModal info={info} id={id} />
      </Container>
    </div>
  );
}
