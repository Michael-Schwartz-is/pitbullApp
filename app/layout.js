import { IBM_Plex_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/NavBar";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/modeToggle";

const font = IBM_Plex_Sans_Hebrew({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "hebrew"],
  display: "swap",
});

export const metadata = {
  title: "Pitbull Scheduling",
  description: "this is cool",
};

export default async function RootLayout({ children }) {
  const userData = await auth();
  return (
    <html lang="en">
      <body dir="rtl" className={`${font.className} font-medium antialiased`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {userData && <NavBar />}
        {/* <ModeToggle /> */}
        <div className="bg-slate-50">{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
