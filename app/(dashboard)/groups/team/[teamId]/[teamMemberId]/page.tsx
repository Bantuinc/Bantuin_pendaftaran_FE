import DeleteButtonForm from "@/components/dashboard/micro/DeleteButtonForm";
import MemberForm from "@/components/dashboard/micro/MemberForm";
import Sidebar from "@/components/dashboard/sidebar";
import { cocogoose, hind } from "@/fonts/font";
import { getAdditionalMemberField } from "@/utils/registration";
import { getMemberDetail, getTeamDetail } from "@/utils/userTeams";
import { Users } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getMemberInformation = async (
  userId: string,
  accessToken: string,
  teamMemberId: string
) => {
  try {
    const res = await getMemberDetail(userId, accessToken, teamMemberId);
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

async function TeamDetail({
  params,
}: {
  params: { teamId: string; teamMemberId: string };
}) {
  const accessToken = cookies().get("accessToken")?.value as string;
  const member = await getMemberInformation(
    params.teamId,
    accessToken,
    params.teamMemberId
  );
  const team = await getTeamInformation(params.teamId, accessToken);

  if (member === undefined) {
    redirect("/login");
  }
  if (!team) {
    return (
      <div>
        {/*LOADING*/}
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
    {
      /*LOADING*/
    }
  }

  const additionalField = await getAdditionalMemberField(
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
          <h3 className={`text-3xl font-semibold ${cocogoose.className}`}>
            Member Data
          </h3>
        </div>
        <div className="flex md:flex-row flex-col gap-6">
          <MemberForm
            teamId={params.teamId}
            member={member}
            additionalField={additionalField}
            isAdd={false}
          />
          <DeleteButtonForm
            roleId={Number(member.role)}
            competitionId={params.teamId}
            teamId={params.teamMemberId}
            accessToken={accessToken}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
