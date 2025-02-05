import { BellRing, CalendarFold } from "lucide-react";
import { auth } from "@/auth";
import SignIn from "./SignIn";
import ActiveLink from "./ActiveLink";

async function NavBar() {
  const userData = await auth();

  return (
    userData && (
      <div className="fixed z-50 w-full flex justify-center bottom-3">
        <div className="header-wrapper shadow-xl shadow-orange-800/10 bg-stone-800  rounded-full text-stone-50  ">
          <header className="flex justify-center items-center px-8 pt-2 pb-1 max-w-[30rem] mx-auto gap-12 ">
            <ActiveLink icon={<CalendarFold />} label={"אימונים"} href={"/schedule"}></ActiveLink>

            <ActiveLink icon={<SignIn />} href={"/profile"}></ActiveLink>

            <ActiveLink
              icon={<BellRing />}
              label="הודעות"
              href={"/notifications"}
              notification={false}
            ></ActiveLink>
          </header>
        </div>
      </div>
    )
  );
}
export default NavBar;
