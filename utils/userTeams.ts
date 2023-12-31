import axios, { AxiosError } from "axios";

const getTeamDetail = async (teamId: string, accessToken: string) => {
  try {
    const { data: response }: { data: APIResponse } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const team: Team = response.data;
    return team as Team;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error?.response?.status;
    }
    throw error;
  }
};

const getMemberDetail = async (
  teamId: string,
  accessToken: string,
  teamMemberId: string
) => {
  try {
    const { data: response }: { data: APIResponse } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}/members/${teamMemberId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const team: Member = response.data;
    return team as Member;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error?.response?.status;
    }
    throw error;
  }
};

const getUserTeams = async (userId: string, accessToken: string) => {
  try {
    console.log(userId);
    const { data: response }: { data: UserTeamAPIResponse } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}/teams`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const userTeam: Team[] = response.data;
    return userTeam as Team[];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error?.response?.status;
    }
    throw error;
  }
};

const getMemberTeams = async (teamId: string, accessToken: string) => {
  try {
    console.log(teamId);
    const { data: response }: { data: UserMemberAPIResponse } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}/members`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const userTeam: Member[] = response.data;
    return userTeam as Member[];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error => ", error?.response?.data);
      throw error?.response?.status;
    }
    throw error;
  }
};

const getCompetitionDetail = async (
  competitionId: string,
  token: string
): Promise<Competition> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${competitionId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: APIResponse = await res.data;
  return data.data as Competition;
};
export {
  getUserTeams,
  getTeamDetail,
  getMemberTeams,
  getMemberDetail,
  getCompetitionDetail,
};
