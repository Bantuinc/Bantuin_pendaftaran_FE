import Sidebar from "@/components/dashboard/sidebar";
import Home from "@/components/dashboard/home";
import { cookies } from "next/headers";
import { getUserNameId } from "@/utils/userCredentials";
import { getUserTeams } from "@/utils/userTeams";
import { redirect } from "next/navigation";
import TeamList from "@/components/dashboard/TeamList";
import Default from "@/components/dashboard/home";

const getTeamList = async (userId: string, accessToken: string) => {
  try {
    const res = await getUserTeams(userId, accessToken);
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    if (error === 404) {
      return "Team Not Found";
    }
    if (typeof error === "number") {
      if (error === 401) {
        //cookies().delete('accessToken')
        redirect("/login");
      }
    }
  }
};

async function Page() {
  const accessToken = cookies().get("accessToken")?.value as string;
  const userId = getUserNameId(accessToken);
  const userTeam = await getTeamList(userId, accessToken);
  console.log(userTeam, "aaa");

  if (!userTeam) {
    return <div className="animate-pulse">loading... {/*LOADING*/}
      <div className="lds-ellipsis">
        <div/>
        <div/>
        <div/>
      </div>
      {/*LOADING*/}</div>;
  }
  return (
    <div className="lg:flex">
      <Sidebar active={"home"} />
      {userTeam?.length === 0 || userTeam === "Team Not Found" ? (
        <Default title={"Home"} />
      ) : (
        <TeamList team={userTeam} States={"/dashboard"} title={"Home"} />
      )}
    </div>
  );
}

export default Page;
