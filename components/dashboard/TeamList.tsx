import { hind } from "@/fonts/font";
import { teamStatusMap } from "@/utils/teamStatusType";
import Link from "next/link";

interface TeamListProps {
  team: Team[];
}

function TeamList({ team }: TeamListProps) {
  return (
    <>
      <div className={`${hind.className} flex-1 px-2 sm:px-0`}>
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold text-slate-100">Your Team</h3>
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team?.map((team: Team, id: number) => (
            <div
              key={id}
              className="relative group bg-[#296875] py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/80 hover:smooth-hover"
            >
              <h4 className="text-white text-3xl font-bold capitalize text-center">
                {team.teamName}
              </h4>
              <p className="text-white/50">as Manager</p>
              <p className="absolute top-2 text-white inline-flex items-center text-md">
                {teamStatusMap.get(team.status)}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
              </p>
              <Link href={`/dashboard/team/${team.id}`}>
                <button
                  type="button"
                  className="bg-[#FFA31D] py-2 px-4 rounded-md text-white font-bold drop-shadow-md hover:bg-[#FFA31D]/90 transition-all"
                >
                  Team Detail
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TeamList;
