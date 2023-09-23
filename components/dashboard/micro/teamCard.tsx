"use client";
import { getTeamDetail } from "@/utils/userTeams";
import { redirect } from "next/navigation";
import Link from "next/link";

interface CreateCardProps {
  teamId: string;
  accessToken?: string;
}

export const CreateCard = ({ teamId }: CreateCardProps) => {
  return (
    <>
      <Link href={`./${teamId}/add`}>
        <div className="min-h-[20rem] group bg-[#296875]/30  py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/40 hover:smooth-hover">
          <div className="bg-[#296875]/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center">
            Add member
          </div>
        </div>
      </Link>
    </>
  );
};

interface memberCardProps {
  teamMemberId: string;
  teamId: string;
  name: string;
  image: string;
}

export function memberCard({
  teamMemberId,
  teamId,
  name,
  image,
}: memberCardProps) {
  return (
    <>
      <Link href={`${teamId}/${teamMemberId}`}>
        <div className="min-h-[20rem] relative group bg-[#296875] py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/80 hover:smooth-hover">
          <div className=" ">
            {/*<img className="w-20 h-20 object-cover object-center rounded-full"*/}
            {/*     src={image}*/}
            {/*     alt="img"/>*/}
            <h4 className="text-white text-2xl font-bold capitalize text-center">
              {name}
            </h4>
            <p className="text-white/50">members</p>
            <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
              Waiting{" "}
              <span className="ml-2 w-2 h-2 block bg-yellow-500 rounded-full group-hover:animate-pulse" />
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
