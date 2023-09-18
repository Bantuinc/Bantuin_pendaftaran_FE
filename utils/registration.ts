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

export { getAdditionalField };
