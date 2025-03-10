import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/NavBar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Providers from "@/lib/providers";

const font = Noto_Sans_Hebrew({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "hebrew"],
  display: "swap",
});

export const metadata = {
  title: "Pitbull Scheduling",
  description: "this is cool",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const publishedAt = new Date().toString();

  return (
    <html lang="en" data-published={publishedAt}>
      <body dir="rtl" className={`${font.className} font-medium antialiased`}>
        <SessionProvider>
          <Providers>
            {session && <NavBar />}
            <div className="bg-slate-50 dark:bg-slate-50/0">{children}</div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
