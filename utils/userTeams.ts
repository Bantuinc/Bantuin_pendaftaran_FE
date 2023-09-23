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

const getMemberDetail = async (teamId: string, accessToken: string,teamMemberId: string) => {
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
    console.log(userId)
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
    console.log(teamId)
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
      throw error?.response?.status;
    }
    throw error;
  }
};

const getCompetitionName = async (competitionId: string): Promise<string> => {
  try {
    const { data: response }: { data: APIResponse } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${competitionId}`
    );
    const competition: Competition = response.data;
    const competitionName = competition.name;
    return competitionName as string;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error?.response?.status as number;
    }
    throw error;
  }
};
export { getUserTeams, getTeamDetail, getMemberTeams, getMemberDetail};