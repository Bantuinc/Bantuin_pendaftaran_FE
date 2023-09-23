
import Team from "@/components/dashboard/team";
import Sidebar from "@/components/dashboard/sidebar";
import {cookies} from "next/headers";
import {getUserNameId} from "@/utils/userCredentials";
import Home from "@/components/dashboard/home";
import TeamList from "@/components/dashboard/TeamList";
import {getUserTeams} from "@/utils/userTeams";
import {redirect} from "next/navigation";
import Default from "@/components/dashboard/home";

const getTeamList = async (userId: string, accessToken: string) => {
    try {
        const res = await getUserTeams(userId, accessToken);
        return res;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        if(error === 404){
            return "Team Not Found"
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
    console.log(userTeam)
    if (!userTeam) {
        return <div className="animate-pulse">loading...</div>;
    }
    return (
        <div className="lg:flex">
            <Sidebar active={"payment"} />
            {userTeam?.length === 0 || userTeam === "Team Not Found" ? <Default title={"Payment"} /> :
                <TeamList team={userTeam}  States={"/payment"} title={"Payment"}/>}
        </div>
    );
}

export default Page;
