import SubmitTeamButton from "@/components/dashboard/SubmitTeamButton";
import TeamForm from "@/components/dashboard/TeamForm";
import TeamStatus from "@/components/dashboard/TeamStatus";
import Sidebar from "@/components/dashboard/sidebar";
import { cocogoose, hind } from "@/fonts/font";
import { getAdditionalField } from "@/utils/registration";
import { TEAM_STATUS, teamStatusMap } from "@/utils/teamStatusType";
import { getTeamDetail } from "@/utils/userTeams";
import { AlertCircle, BookMarked } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

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
  if (
    status === TEAM_STATUS.CanBeSubmited ||
    status === TEAM_STATUS.NeedRevision ||
    status === TEAM_STATUS.NeedFurtherData
  )
    return true;
  return false;
};

async function TeamDetail({ params }: { params: { teamId: string } }) {
  const accessToken = cookies().get("accessToken")?.value as string;
  const team = await getTeamInformation(params.teamId, accessToken);

  if (!team) {
    return (
      <div>
        loading...{/*LOADING*/}
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
        </div>
        {/*LOADING*/}
      </div>
    );
  }
  console.log("team => ", team);
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
          <h3 className={`text-3xl font-semibold ${cocogoose.className}`}>
            Team Data
          </h3>
        </div>
        <div className="flex md:flex-row flex-col gap-6">
          <TeamForm team={team} additionalField={additionalField} />
          <div className="flex flex-col gap-3">
            <TeamStatus team={team} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
