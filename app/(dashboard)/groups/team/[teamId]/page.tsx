import Sidebar from "@/components/dashboard/sidebar";
import { hind } from "@/fonts/font";
import { getMemberTeams } from "@/utils/userTeams";
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
    return <div>loading...{/*LOADING*/}
      <div className="lds-ellipsis">
        <div/>
        <div/>
        <div/>
      </div>
      {/*LOADING*/}</div>;
  }
  return (
    <div className="lg:flex">
      <Sidebar active={"group"} />
      <Team team={team} accessToken={accessToken} teamId={params.teamId}/>
    </div>
  );
}

export default TeamDetail;
