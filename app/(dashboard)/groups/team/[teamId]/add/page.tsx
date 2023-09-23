import TeamForm from "@/components/dashboard/TeamForm";
import Sidebar from "@/components/dashboard/sidebar";
import { hind } from "@/fonts/font";
import { getAdditionalMemberField } from "@/utils/registration";
import { teamStatusMap } from "@/utils/teamStatusType";
import { getTeamDetail } from "@/utils/userTeams";
import { AlertCircle, Users } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MemberForm from "@/components/dashboard/micro/MemberForm";

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

async function TeamDetail({ params }: { params: { teamId: string } }) {
  const accessToken = cookies().get("accessToken")?.value as string;
  const team = await getTeamInformation(params.teamId, accessToken);
  console.log("team => ", team);
  const member: Member = {} as Member;
  if (!team) {
    return <div>loading...</div>;
  }

  let additionalField = await getAdditionalMemberField(
    accessToken,
    team.competitionId
  );
  console.log(additionalField, "hoaks");
  if (additionalField === null) redirect("/login");

  return (
    <div className="lg:flex">
      <Sidebar active={"group"} />
      <div className={`${hind.className} flex-1 px-2 sm:px-0 py-3 md:py-0`}>
        <div className="mb-6 flex gap-2 items-center text-slate-100">
          <Users />
          <h3 className="text-3xl font-semibold">Member Data</h3>
        </div>
        <div className="flex md:flex-row flex-col gap-6">
          <MemberForm
            team={team}
            additionalField={additionalField}
            teamId={params.teamId}
            isAdd={true}
            member={member}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
