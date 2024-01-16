import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavbarDropdownProps {
  competition: Competition[];
}

function NavbarDropdown({ competition }: NavbarDropdownProps) {
  const [openEvent, setOpenEvent] = useState<boolean>(false);
  const [openCompetition, setOpenCompetition] = useState<boolean>(false);

  const handleToggleEvent = () => {
    if (openCompetition) setOpenCompetition(false);
    setOpenEvent((value) => !value);
  };

  const handleToggleCompetition = () => {
    if (openEvent) setOpenEvent(false);
    setOpenCompetition((value) => !value);
  };

  return (
    <>
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
              <Link href={"/event_list/ceremonies"}>
                <li>Ceremonies</li>
              </Link>
              <Link href={"/event_list/"}>
                <li>Youth Mining Conference</li>
              </Link>
              <Link href={"/event_list/"}>
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
              {competition
                .filter((comp) => comp.type !== 3)
                .map((comp: Competition, id: number) => (
                  <Link key={id} href={`/events/${comp.id}`}>
                    <li>{comp.name}</li>
                  </Link>
                ))}
            </ul>
          </Transition>
        </button>
      </li>
    </>
  );
}

export default NavbarDropdown;
