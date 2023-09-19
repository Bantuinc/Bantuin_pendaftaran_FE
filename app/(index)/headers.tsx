"use client";

import Image from "next/image";
import Language from "@/components/Language";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useCookies } from "react-cookie";

function Headers() {
  const [open, setOpen] = useState<boolean>(false);
  const [openEvent, setOpenEvent] = useState<boolean>(false);
  const [openCompetition, setOpenCompetition] = useState<boolean>(false);
  const [cookies] = useCookies(["accessToken"]);

  const handleToggleEvent = () => {
    if (openCompetition) setOpenCompetition(false);
    setOpenEvent((value) => !value);
  };

  const handleToggleCompetition = () => {
    if (openEvent) setOpenEvent(false);
    setOpenCompetition((value) => !value);
  };

  return (
    <div className="fixed z-10 box-border w-[calc(100vw-3rem)] h-[80px] mt-4 mx-4 py-6 px-12 rounded-[10px] flex items-center justify-between ring-1 ring-slate-200/70 bg-gradient-to-br from-[#fff6] to-[#FFFFFF03] before:backdrop-blur-lg before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:rounded-[10px]">
      <div>
        <Link href="/">
          <Image src="/logo2.png" height={100} width={150} alt="Logo" />
        </Link>
      </div>
      <ul
        className={`flex font-bold text-white md:flex-row md:items-center md:gap-12 md:relative md:top-0 md:right-0 md:p-0 md:ring-0 md:from-[#0000] md:to-[#0000] md:backdrop-blur-0 md:shadow-none flex-col gap-3 fixed top-28 right-4 py-4 px-8 rounded-lg bg-gradient-to-br from-[#fff6] to-[#FFFFFF03] ring-1 ring-slate-200/70 backdrop-blur-lg shadow-lg ${
          open ? "flex" : "md:flex hidden"
        }`}
      >
        <li>
          <button
            type="button"
            className="relative flex items-center gap-2 group"
            onClick={handleToggleEvent}
          >
            <p className="drop-shadow-md">Events</p>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={19}
              height={12}
              className="w-4 h-4 pt-1"
            />
            <Transition
              show={openEvent}
              enter="transition-all duration-150"
              enterFrom="opacity-0 -translate-y-10"
              enterTo="opacity-100 translate-y-0"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute box-border md:top-8 top-0 md:left-0 -left-56 bg-[#5B99A8] rounded-md text-[#468091] shadow-sm shadow-[#46809166]"
            >
              <ul className="flex flex-col items-stretch gap-1 [&>a]:bg-white [&>a:hover]:bg-slate-200 [&>a]:py-3 [&>a]:px-6 [&>a:first-child]:rounded-t-md [&>a:last-child]:rounded-b-md [&>a]:w-52 [&>a]:text-sm [&>a]:transition-all">
                <Link href={"/events/"}>
                  <li>Ceremonies</li>
                </Link>
                <Link href={"/events/"}>
                  <li>Youth Mining Conference</li>
                </Link>
                <Link href={"/events/"}>
                  <li>Mining Talks</li>
                </Link>
                <Link href={"/events/"}>
                  <li>Mining Expo and Job Fair</li>
                </Link>
                <Link href={"/events"}>
                  <li>Mining Exhibition</li>
                </Link>
                <Link href={"/events"}>
                  <li>Bandung Tour and Outbond</li>
                </Link>
                <Link href={"/events"}>
                  <li>Laboratory Tour</li>
                </Link>
              </ul>
            </Transition>
          </button>
        </li>
        <li className="drop-shadow-md">
          <button
            type="button"
            className="relative flex items-center gap-2 group"
            onClick={handleToggleCompetition}
          >
            <p className="drop-shadow-md">Competition</p>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={19}
              height={12}
              className="w-4 h-4 pt-1"
            />
            <Transition
              show={openCompetition}
              enter="transition-all duration-150"
              enterFrom="opacity-0 -translate-y-10"
              enterTo="opacity-100 translate-y-0"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute box-border md:top-8 top-0 md:left-0 -left-56 bg-[#5B99A8] rounded-md text-[#468091] shadow-sm shadow-[#46809166]"
            >
              <ul className="flex flex-col items-stretch gap-1 [&>a]:bg-white [&>a:hover]:bg-slate-200 [&>a]:py-3 [&>a]:px-6 [&>a:first-child]:rounded-t-md [&>a:last-child]:rounded-b-md [&>a]:w-52 [&>a]:text-sm [&>a]:transition-all">
                <Link href={"/events/mining-competition"}>
                  <li>Mining Competition</li>
                </Link>
                <Link href={"/events"}>
                  <li>Paper Contest</li>
                </Link>
                <Link href={"/events"}>
                  <li>Poster Contest</li>
                </Link>
                <Link href={"/events"}>
                  <li>Hackathon Contest</li>
                </Link>
              </ul>
            </Transition>
          </button>
        </li>
        <li className="drop-shadow-md">
          <Link href="/about">About Us</Link>
        </li>
        <li className="drop-shadow-md">Partnership</li>
        <li className="drop-shadow-md">
          <Link href="/#faq">FAQ</Link>
        </li>
        {cookies.accessToken !== undefined ? (
          <li className="drop-shadow-md bg-[#FFA31D] py-1.5 px-3 rounded-md text-center">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        ) : (
          <li className="drop-shadow-md">
            <Link href="/login">Login</Link>
          </li>
        )}
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
