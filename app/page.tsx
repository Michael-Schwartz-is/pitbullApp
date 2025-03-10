"use client";

import { useRouter } from "next/navigation";
import Container from "@/app/components/ui/Container";
import { DaysOfWeekCards } from "@/app/components/ui/DaysOfWeek";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useGetUserInfo } from "@/client/user/user";
import { useGetAllFeatureSessions } from "@/client/sessions/sessions";

function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  const { data: allFeatureSessions } = useGetAllFeatureSessions();
  const { data: userData } = useGetUserInfo();

  return (
    <>
      <main>
        <Container>
          <div className="max-w-[30rem] mb-8 mx-auto">
            <h1 className="text-2xl font-bold ">לוז אימונים</h1>
            <p>שלום {session && session?.user?.name?.split(" ")[0]}!</p>
          </div>
          <DaysOfWeekCards />
        </Container>
      </main>
    </>
  );
}
export default Home;
