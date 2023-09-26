import PaymentForm from "@/components/dashboard/PaymentForm";
import Default from "@/components/dashboard/home";
import Payment from "@/components/dashboard/payment";
import Sidebar from "@/components/dashboard/sidebar";
import { cocogoose } from "@/fonts/font";
import { getAdditionalField } from "@/utils/registration";
import { TEAM_STATUS } from "@/utils/teamStatusType";
import { getTeamDetail } from "@/utils/userTeams";
import { Banknote } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getTeamInformation = async (userId: string, accessToken: string) => {
  try {
    const res = await getTeamDetail(userId, accessToken);
    console.log("res", res);
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log(error, "hoak");
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

  // console.log(team.status,"hoak")
  if (!team) {
    return (
      <>
        {/*LOADING*/}
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
        </div>
        {/*LOADING*/}
      </>
    );
  }

  const additionalField = await getAdditionalField(
    accessToken,
    team.competitionId
  );
  if (additionalField === null) redirect("/login");

  if (
    team.status === TEAM_STATUS.NeedPayment ||
    team.status === TEAM_STATUS.Accepted
  ) {
    return (
      <div className="lg:flex">
        <Sidebar active={"payment"} />
        <div className={`flex-1 px-2 sm:px-0 py-3 md:py-0`}>
          <div className="mb-6 flex gap-2 items-center text-slate-100">
            <Banknote className="w-8 h-8" />
            <h3 className={`text-3xl font-semibold ${cocogoose.className}`}>
              Team Payment
            </h3>
          </div>
          <div className="flex md:flex-row flex-col gap-6">
            <PaymentForm team={team} additionalField={additionalField} />
            <Payment />
          </div>
        </div>
      </div>
    );
  }

  const desc =
    team.status === TEAM_STATUS.WaitingList
      ? "Please wait patiently, because you are on the waiting list. Stay tuned"
      : team.status === TEAM_STATUS.OnReview
      ? "Please wait for confirmation from our admin"
      : "Please complete the data";
  return (
    <div className="lg:flex">
      <Sidebar active={"payment"} />
      <Default title={"Payment"} description={desc} />
    </div>
  );
}

export default TeamDetail;
