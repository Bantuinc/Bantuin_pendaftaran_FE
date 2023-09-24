import {cocogoose, hind} from "@/fonts/font";
import { teamStatusMap } from "@/utils/teamStatusType";
import Link from "next/link";

interface TeamListProps {
  team: Team[];
  //TITLE for page
  title: String;
  //Where the team is clicked for page
  States: String;
}

function TeamList({ team, title, States }: TeamListProps) {
  return (
    <>
      <div className={`${cocogoose.className} flex-1 px-2 sm:px-0`}>
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold text-slate-100">
            {title ? title : "Home"}
          </h3>

        </div>
          {title === "Home"?
            <a href={"https://bit.ly/MiningCompetitionBooklet"} className="text-sm text-blue-100">
              *Don&apos;t forget to read the Mining Competition Booklet first.
            </a>
            :<div/>}
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team?.map((team: Team, id: number) => (
            <div
              key={id}
              className="relative group bg-[#296875] py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/80 hover:smooth-hover"
            >
              <h4 className="text-white text-2xl font-bold capitalize text-center">
                {team.teamName}
              </h4>
              <p className="text-white/80 text-sm  font-semibold">
                {team.competitionName}
              </p>
              <p className="text-white/50">as Manager</p>
              <p className="absolute top-2 text-white inline-flex items-center text-md">
                {teamStatusMap.get(team.status)}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse" />
              </p>
              <Link href={`${States}/team/${team.id}`}>
                <button
                  type="button"
                  className="bg-[#FFA31D] py-2 px-4 rounded-md text-white font-bold drop-shadow-md hover:bg-[#FFA31D]/90 transition-all"
                >
                  Team Detail
                </button>
              </Link>
            </div>
          ))}
          <Link
            href="/register"
            className="min-h-[20rem] flex items-center justify-center bg-[#29687533] group transition-all rounded-md hover:bg-[#29687555]"
          >
            <div className="py-2 px-4 group-hover:text-slate-200 bg-[#296875] text-white/20 font-semibold rounded">
              Join Competition
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TeamList;
