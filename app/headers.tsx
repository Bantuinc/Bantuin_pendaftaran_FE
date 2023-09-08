"use client";

import Image from "next/image";
import Language from "@/components/Language";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

function Headers() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed z-10 box-border w-[calc(100vw-3rem)] h-[80px] mt-4 mx-4 py-6 px-12 rounded-[10px] flex items-center justify-between ring-1 ring-slate-200/70 bg-gradient-to-br from-[#fff6] to-[#FFFFFF03] before:backdrop-blur-lg before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:rounded-[10px]">
      <div>
        <Link href="/">
          <Image src="/logo2.png" height={100} width={150} alt="Logo" />
        </Link>
      </div>
      <ul
        className="flex font-bold text-white md:flex-row md:items-center md:gap-12 md:relative md:top-0 md:right-0 md:p-0 md:ring-0 md:from-[#0000] md:to-[#0000] md:backdrop-blur-0 md:shadow-none flex-col gap-3 fixed top-28 right-4 py-4 px-8 rounded-lg bg-gradient-to-br from-[#fff6] to-[#FFFFFF03] ring-1 ring-slate-200/70 backdrop-blur-lg shadow-lg"
        style={{ display: open ? "block" : "none" }}
      >
        <li className="drop-shadow-md">
          <Link href={"/events"}>Events</Link>
        </li>
        <li className="drop-shadow-md">Competition</li>
        <li className="drop-shadow-md">About Us</li>
        <li className="drop-shadow-md">Partnership</li>
        <li className="drop-shadow-md">FAQ</li>
        <li className="drop-shadow-md">
          <Link href="/login">Login</Link>
        </li>
      </ul>
      <button
        className="md:hidden block ring-1 ring-slate-200/70 rounded-lg p-2"
        onClick={() => setOpen((value) => !value)}
      >
        <AlignJustify color="white" />
      </button>
      <div className="hidden md:block">
        <Language />
      </div>
    </div>
  );
}

export default Headers;
