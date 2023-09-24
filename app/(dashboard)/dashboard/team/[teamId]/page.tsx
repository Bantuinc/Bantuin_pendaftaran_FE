import TeamForm from "@/components/dashboard/TeamForm";
import Sidebar from "@/components/dashboard/sidebar";
import { hind } from "@/fonts/font";
import { getAdditionalField } from "@/utils/registration";
import { teamStatusMap } from "@/utils/teamStatusType";
import { getTeamDetail } from "@/utils/userTeams";
import { AlertCircle, BookMarked } from "lucide-react";
import { cookies } from "next/headers";
import {redirect, useRouter} from "next/navigation";
import {FormEvent} from "react";
import axios, {AxiosError} from "axios";
import Swal from "sweetalert2";

const getTeamInformation = async (userId: string, accessToken: string) => {
  try {
    const res = await getTeamDetail(userId, accessToken);
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    if (typeof error === "number") {
      if (error >= 400) {
        redirect("/login");
      }
    }
    console.log("error", error);
  }
};

const canBeSubmitted = (status: number): boolean => {
  if (status === 3 || status === 5 || status === 10) return true;
  return false;
};



async function TeamDetail({ params }: { params: { teamId: string } }) {
  const accessToken = cookies().get("accessToken")?.value as string;
  const team = await getTeamInformation(params.teamId, accessToken);

  if (!team) {
    return <div>loading...{/*LOADING*/}
      <div className="lds-ellipsis">
        <div/>
        <div/>
        <div/>
      </div>
      {/*LOADING*/}</div>;
  }

  const additionalField = await getAdditionalField(
    accessToken,
    team.competitionId
  );
  if (additionalField === null) redirect("/login");

  return (
    <div className="lg:flex">
      <Sidebar active={"home"} />
      <div className={`${hind.className} flex-1 px-2 sm:px-0 py-3 md:py-0`}>
        <div className="mb-6 flex gap-2 items-center text-slate-100">
          <BookMarked />
          <h3 className="text-3xl font-semibold">Team Data</h3>
        </div>
        <div className="flex md:flex-row flex-col gap-6">
          <TeamForm team={team} additionalField={additionalField} />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 py-1 px-4 text-white font-semibold rounded-full bg-[#1e4a5d] w-fit">
                <AlertCircle className="w-4 h-4" />
                <p>Team Status</p>
              </div>
              <h1 className="text-white font-bold text-3xl">
                {teamStatusMap.get(team.status)}
              </h1>
              <button
                type="button"
                disabled={!canBeSubmitted(team.status)}
                className="py-3 px-6 enabled:bg-[#FFA31D] disabled:bg-gray-300 disabled:cursor-not-allowed enabled:hover:bg-[#1e4a5d] rounded-md text-white shadow-md font-bold text-lg transition-all"
              >
                <p className="drop-shadow-md">Submit your Team</p>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
