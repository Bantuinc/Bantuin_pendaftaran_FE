"use client";
import { cocogoose } from "@/fonts/font";
import { TEAM_STATUS, teamStatusMap } from "@/utils/teamStatusType";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import SubmitTeamButton from "./SubmitTeamButton";

interface TeamStatusProps {
  team: Team;
}

function TeamStatus({ team }: TeamStatusProps) {
  return (
    <>
      <div className="flex items-center gap-1 py-1 px-4 text-white font-semibold rounded-full bg-[#1e4a5d] w-fit">
        <AlertCircle className="w-4 h-4" />
        <p>Team Status</p>
      </div>
      <h1 className={`text-white font-bold text-3xl ${cocogoose.className}`}>
        {teamStatusMap.get(team.status)}
      </h1>
      {team.status === TEAM_STATUS.NeedPayment ? (
        <div className="flex flex-col gap-2">
          <p className="text-white">You have to pay the registration fee</p>
          <Link
            href={`/payment/team/${team.id}`}
            className="py-2 px-4 text-lg shadow-md shadow-emerald-600 bg-emerald-500 text-center hover:bg-emerald-600 transition-all text-white font-bold rounded-md"
          >
            <button type="button">Pay Now</button>
          </Link>
        </div>
      ) : null}
      <SubmitTeamButton teamDetail={team} />
    </>
  );
}

export default TeamStatus;
