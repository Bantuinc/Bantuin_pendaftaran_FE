"use client";
import Link from "next/link";
import NavbarDropdown from "./NavbarDropdown";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { useCookies } from "react-cookie";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [cookies] = useCookies(["accessToken"]);

  return (
    <>
      <ul
        className={`flex font-bold text-white md:flex-row md:items-center md:gap-12 md:relative md:top-0 md:right-0 md:p-0 md:ring-0 md:from-[#0000] md:to-[#0000] md:backdrop-blur-0 md:shadow-none flex-col gap-3 fixed top-28 right-4 py-4 px-8 rounded-lg bg-gradient-to-br from-[#fff6] to-[#FFFFFF03] ring-1 ring-slate-200/70 backdrop-blur-lg shadow-lg ${
          open ? "flex" : "md:flex hidden"
        }`}
      >
        <NavbarDropdown />
        <li className="drop-shadow-md">
          <Link href="/about">About Us</Link>
        </li>
        <li className="drop-shadow-md">Partnership</li>
        <li className="drop-shadow-md">
          <Link href="/#faq">FAQ</Link>
        </li>
        {cookies.accessToken === undefined ? (
          <li className="drop-shadow-md">
            <Link href="/login">Login</Link>
          </li>
        ) : (
          <li className="drop-shadow-md bg-[#FFA31D] py-1.5 px-3 rounded-md text-center">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        )}
      </ul>
      <button
        className="md:hidden block ring-1 ring-slate-200/70 rounded-lg p-2"
        onClick={() => setOpen((value) => !value)}
      >
        <AlignJustify color="white" />
      </button>
    </>
  );
}

export default Navbar;
