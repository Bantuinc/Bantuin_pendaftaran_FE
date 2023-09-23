import Sidebar from "@/components/dashboard/sidebar";
import { hind } from "@/fonts/font";
import {
  getMemberTeams,
  getCompetitionDetail,
  getTeamDetail,
} from "@/utils/userTeams";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Team from "@/components/dashboard/team";

const getTeamInformation = async (teamId: string, accessToken: string) => {
  try {
    const res = await getMemberTeams(teamId, accessToken);

    console.log("res", res);
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    if (typeof error === "number") {
      if (error === 401) {
        redirect("/login");
      }
    }
    console.log("error", error);
  }
};

async function TeamDetail({ params }: { params: { teamId: string } }) {
  const accessToken = cookies().get("accessToken")?.value as string;
  const team = await getTeamInformation(params.teamId, accessToken);
  if (!team) {
    return <div>loading...</div>;
  }
  const teamDetail = await getTeamDetail(params.teamId, accessToken);
  if (!teamDetail) {
    return <div>loading...</div>;
  }
  const competitionDetail = await getCompetitionDetail(
    teamDetail.competitionId,
    accessToken
  );
  return (
    <div className="lg:flex">
      <Sidebar active={"group"} />
      <Team
        team={team}
        accessToken={accessToken}
        teamId={params.teamId}
        competitionDetail={competitionDetail}
      />
    </div>
  );
}

export default TeamDetail;
