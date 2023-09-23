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

const getAdditionalMemberField = async (token: string, competitionId: string) => {
  try {
    const { data }: { data: AdditionalFieldAPIResponse } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/additional/member?competitionId=${competitionId}`,
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

const CITIZENSHIP = {
  domestic: 1,
  overseas: 2,
};

const SUBTHEME_OPTION = [
  { value: "Healthand Safety", label: "Health and Safety" },
  {
    value: "Digitalization and Automationin Mine Production",
    label: "Digitalization and Automation in Mine Production",
  },
  { value: "Downstream Industry", label: "Downstream Industry" },
  {
    value: "Mining Economics and Management",
    label: "Mining Economics and Management",
  },
  { value: "Geotechnical Engineering", label: "Geotechnical Engineering" },
  {
    value: "Drilling and Blasting Technology",
    label: "Drilling and Blasting Technology",
  },
  { value: "Mining Waste and Tailings", label: "Mining Wasteand Tailings" },
  {
    value: "Exploration of Coaland Mineral Resources",
    label: "Exploration of Coaland Mineral Resources",
  },
  {
    value: "Mining Policy and Information",
    label: "Mining Policy and Information",
  },
  { value: "Human Resource Development", label: "Human Resource Development" },
  {
    value: "Renewable Energy in Mining Operation",
    label: "Renewable Energy in Mining Operation",
  },
  { value: "Community Empowerment", label: "Community Empowerment" },
];

export { getAdditionalField,getAdditionalMemberField, getCompetition, CITIZENSHIP, SUBTHEME_OPTION };
