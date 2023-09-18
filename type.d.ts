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
