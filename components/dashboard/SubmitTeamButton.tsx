"use client";

import { cocogoose } from "@/fonts/font";
import { TEAM_STATUS } from "@/utils/teamStatusType";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

interface SubmitButtonProps {
  teamDetail: Team;
}
function SubmitTeamButton({ teamDetail }: SubmitButtonProps) {
  const [cookies] = useCookies(["accessToken"]);
  const accessToken = cookies.accessToken;
  const router = useRouter();

  const canBeSubmitted = (status: number): boolean => {
    if (
      status === TEAM_STATUS.CanBeSubmited ||
      status === TEAM_STATUS.NeedRevision ||
      status === TEAM_STATUS.NeedFurtherData
    )
      return true;
    return false;
  };

  const handleSubmitTeam = async () => {
    try {
      const { data: response }: { data: APIResponse } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${teamDetail.competitionId}/teams/${teamDetail.id}/submit`,
        null,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      Swal.fire({
        title: "Success!",
        text: response?.message,
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        router.refresh();
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data?.message);
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        console.log(error);
      }
    }
  };
  return (
    <button
      type="button"
      onClick={handleSubmitTeam}
      disabled={!canBeSubmitted(teamDetail.status)}
      className="py-3 px-6 enabled:bg-[#FFA31D] disabled:bg-gray-300 disabled:cursor-not-allowed enabled:hover:bg-[#1e4a5d] rounded-md text-white shadow-md transition-all"
    >
      <p className={`drop-shadow-md font-bold text-md ${cocogoose.className}`}>
        Submit your Team
      </p>
    </button>
  );
}

export default SubmitTeamButton;
