import axios, { AxiosError } from "axios";

const getAdditionalField = async (token: string, competitionId: string) => {
  try {
    const { data }: { data: AdditionalFieldAPIResponse } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/additional/team?competitionId=${competitionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data.data as AdditionalField[];
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return null;
      }
    }
    throw error;
  }
};

const getCompetition = async (): Promise<Competition[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/competition`,
      {
        next: { revalidate: 3600 },
      }
    );
    const response: CompetitionAPIResponse = await res.json();
    return response.data;
  } catch (err) {
    if (err instanceof Error) throw err.message;
    throw "Something went wrong!";
  }
};

export { getAdditionalField, getCompetition };
