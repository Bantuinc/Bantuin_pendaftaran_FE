import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Headers from "./headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISMC 14 | 2023",
  description: "The 14th Indonesian Student Mining Competition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        <div className="pt-[96px]">{children}</div>
      </body>
    </html>
  );
}
