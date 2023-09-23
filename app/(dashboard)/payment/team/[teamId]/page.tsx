import Sidebar from "@/components/dashboard/sidebar";
import { hind } from "@/fonts/font";
import { getTeamDetail } from "@/utils/userTeams";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Team from "@/components/dashboard/team";
import Payment from "@/components/dashboard/payment";
import Default from "@/components/dashboard/home";

const getTeamInformation = async (userId: string, accessToken: string) => {
  try {
    const res = await getTeamDetail(userId, accessToken);
    console.log("res", res);
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log(error,"hoak")
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
  console.log(team.status,"hoak")
  if (!team) {
    return <div>loading...</div>;
  }
  // NOT (STATUS ON PAYMENT or higher)
  if(team.status < 6){
    return (
        <div className="lg:flex">
          <Sidebar active={"payment"} />
          <Default title={"Payment"} description={"payment"}  />
        </div>
    )
  }
  return (
    <div className="lg:flex">
      <Sidebar active={"payment"} />
      <Payment/>
    </div>
  );
}

export default TeamDetail;
