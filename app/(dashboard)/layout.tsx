import "../globals.css";
import type { Metadata } from "next";
import { cocogoose } from "@/fonts/font";
import Sidebar from "@/components/dashboard/sidebar";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ISMC 14 | 2023",
  description: "The 14th Indonesian Student Mining Competition",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={cocogoose.className}>

          <div className="p-16 min-h-screen flex items-center justify-center bg-[#296875]">

              <div className="ring-1 ring-slate-200/70 bg-gradient-to-br from-[#fff6] to-[#29687506] before:backdrop-blur-lg before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:rounded-[10px] flex-1 flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
                  <div className="mb-8 mt-4">
                      <Link href="/">
                          <Image src="/logo2.png" height={100} width={150} alt="Logo" />
                      </Link>
                  </div>
                  <div>{children}</div>
              </div>
          </div>
      </body>
      </html>
  );
}
