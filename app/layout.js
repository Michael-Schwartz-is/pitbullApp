import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/NavBar";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/modeToggle";
import { addUserToDB } from "@/lib/utils";
import { getAllFutureSessions } from "./api/get-my-sessions/route";
import { redirect } from "next/navigation";

const font = Noto_Sans_Hebrew({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "hebrew"],
  display: "swap",
});

export const metadata = {
  title: "Pitbull Scheduling",
  description: "this is cool",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  const publishedAt = new Date().toString();

  return (
    <html lang="en" published={publishedAt}>
      <body dir="rtl" className={`${font.className} font-medium antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {session && <NavBar />}
        </ThemeProvider>
        <div className="bg-slate-50 dark:bg-slate-50/0">{children}</div>
      </body>
    </html>
  );
}
