import "../globals.css";
import type { Metadata } from "next";
import Headers from "./headers";
import Footer from "./Footer";
import { inter } from "@/fonts/font";

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
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
