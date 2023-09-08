import "./globals.css";
import type { Metadata } from "next";
import { Inter, Hind, Roboto } from "next/font/google";

import Headers from "./headers";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });
export const hind = Hind({ weight: ["400", "600", "700"], subsets: ["latin"] });
export const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

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
