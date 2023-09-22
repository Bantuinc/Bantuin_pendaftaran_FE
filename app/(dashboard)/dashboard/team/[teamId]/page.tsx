import Sidebar from "@/components/dashboard/sidebar";
import { hind } from "@/fonts/font";
import { getTeamDetail } from "@/utils/userTeams";
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
  return (
    <div className="lg:flex">
      <Sidebar active={"home"} />
      <div className={`${hind.className} flex-1 px-2 sm:px-0`}>
        <div className="flex justify-between items-center">
          <h3 className="mb-6 text-3xl font-semibold text-slate-100">
            Team Data
          </h3>
        </div>
        <form action="" className="py-4 px-8 rounded-xl bg-[#296875]">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="teamName"
              className="text-lg text-white font-semibold"
            >
              Team Name
            </label>
            <input
              readOnly
              id="teamName"
              className="text-[#296875] text-md py-1 px-2 rounded-md w-min focus:outline-none"
              value={team.teamName}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="citizenship"
              className="text-lg text-white font-semibold"
            >
              Citizenship
            </label>
            <input
              readOnly
              id="citizenship"
              className="text-[#296875] text-md py-1 px-2 rounded-md w-min focus:outline-none"
              value={team.citizenship}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeamDetail;
