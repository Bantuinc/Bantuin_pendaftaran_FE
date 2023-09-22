import Sidebar from "@/components/dashboard/sidebar";
import Home from "@/components/dashboard/home";
import { cookies } from "next/headers";
import { getUserNameId } from "@/utils/userCredentials";
import { getUserTeams } from "@/utils/userTeams";
import { redirect } from "next/navigation";
import TeamList from "@/components/dashboard/TeamList";

const getTeamList = async (userId: string, accessToken: string) => {
  try {
    const res = await getUserTeams(userId, accessToken);
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    if (typeof error === "number") {
      if (error === 401) {
        redirect("/login");
      }
    }
  }
};

async function Page() {
  const accessToken = cookies().get("accessToken")?.value as string;
  const userId = getUserNameId(accessToken);
  const userTeam = await getTeamList(userId, accessToken);

  if (!userTeam) {
    return <div>loading...</div>;
  }
  return (
    <div className="lg:flex">
      <Sidebar active={"home"} />
      {userTeam.length === 0 ? <Home /> : <TeamList team={userTeam} />}
    </div>
  );
}

export default Page;
