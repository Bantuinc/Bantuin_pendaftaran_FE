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

interface UserTeamAPIResponse extends APIResponse {
  data: Team[];
}

interface UserMemberAPIResponse extends APIResponse {
  data: Member[];
}

interface AdditionalFieldAPIResponse extends APIResponse {
  data: AdditionalField[];
}

type AdditionalField = {
  name: string;
  type: number;
  normalizedName: string;
  competitionId: string;
  description: string;
  description2?: string;
  priority: number;
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

type Team = {
  id: string;
  teamName: string;
  status: number;
  citizenship: string;
  proofOfPayment: string;
  teamAdditional: { [key: string]: string };
  description: string;
  competitionId: string;
  competitionName: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

type Member = {
  id: string;
  name: string;
  nim: number;
  email: string;
  phone: string;
  ktm: string;
  memberAdditional: { [key: string]: string };
  teamId: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

interface StringObject {
  [key: string]: string;
}
