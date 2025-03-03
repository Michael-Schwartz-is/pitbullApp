"use client";

import Image from "next/image";
import Container from "../components/ui/Container";
import RandomImage from "@/app/components/ui/RandomImage";
import ModeToggle from "@/components/mode-toggle";
import { useIsAuthenticated } from "@/hooks/is-authenticated";
import LogoutForm from "../components/LogoutForm";
import { useGetUserInfo } from "@/client/user/user";
import { useGetAllUserSessions } from "@/client/sessions/sessions";
import { formatDate } from "date-fns";
import { join } from "path";

export default function Profile() {
  useIsAuthenticated();
  const { data: user } = useGetUserInfo();
  const {
    data: sessionList,
    isLoading: sessionsLoading,
    error: error,
  } = useGetAllUserSessions(user?.email, {
    enabled: !!user?.email,
  });

  const sortedSessions = sessionList?.sort((a, b) => new Date(b.date) - new Date(a.date));
  const joinDate = sortedSessions && formatDate(sortedSessions?.at(-1).date, "MMM yyyy");

  return (
    <div>
      <div className="fixed z-50 px-4 top-0 w-full flex justify-between items-center">
        {/* <ModeToggle /> */}
        {/* <LogoutForm /> */}
      </div>
      <Container width="max-w-[30rem]">
        <div>
          {user?.image ? (
            <Image
              src={user?.image}
              width={100}
              height={100}
              className="aspect-square object-cover rounded-full mx-auto"
              alt={user.name}
            />
          ) : (
            "Loading Image"
            // <RandomImage update={user?.image} width={100} height={100} />
          )}
          <div className="text-center gap-2 flex items-center flex-col py-2 mx-auto">
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold">{user?.name}</p>
              <p className="text-sm">{`${sessionList?.length} אימונים`}</p>
            </div>
            <p className="text-sm py-1 px-3 rounded-md border dark:border-transparent border-stone-200 bg-orange-100 dark:bg-stone-800">
              {`תאריך הצטרפות `}
              <span className="font-bold text-stone-600">{`${joinDate}`}</span>
            </p>
          </div>
        </div>

        {sessionsLoading && <p>Loading...</p>}
        {error && <p>לא הצלחתי לטעון את ההסטוריה שלך.</p>}
        {sessionList?.map((session) => (
          <li className=" list-none" key={session.id}>
            <div className="flex justify-between p-4 bg-white shadow-sm items-center dark:bg-stone-800 shadow-stone-100 dark:border-transparent dark:shadow-stone-100/0">
              <div className="felx flex-col">
                <p className="font-bold">{session.name}</p>
                <p className="text-sm">{session.day}</p>
              </div>
              <p className="text-sm">{formatDate(new Date(session.date), "dd/MM/yyyy")}</p>
            </div>
          </li>
        ))}
      </Container>
    </div>
  );
}
