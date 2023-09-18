interface APIResponse {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  timestamp: number;
  data: any;
}
interface CompetitionAPIResponse extends APIResponse {
  data: Competition[];
}

interface AdditionalFieldAPIResponse extends APIResponse {
  data: AdditionalField[];
}

type AdditionalField = {
  name: string;
  type: number;
  normalizedName: string;
  competitionId: string;
};

type Competition = {
  id: string;
  name: string;
  description: string;
  requiredMember: number;
  maxMember: number;
  quota: number;
  type: number;
  openedAt: string;
  closedAt: string;
  status: number;
  createdAt: string;
  updatedAt: string;
};
