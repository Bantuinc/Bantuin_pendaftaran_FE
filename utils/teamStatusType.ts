const teamStatusMap = new Map<number, string>();

teamStatusMap.set(1, "Need Fill Data");
teamStatusMap.set(2, "Need More Member");
teamStatusMap.set(3, "Can Be Submited");
teamStatusMap.set(4, "On Review");
teamStatusMap.set(5, "Need Revision");
teamStatusMap.set(6, "Need Payment");
teamStatusMap.set(7, "Accepted");
teamStatusMap.set(8, "Waiting List");
teamStatusMap.set(9, "Declined");
teamStatusMap.set(10, "Need Further Data");
teamStatusMap.set(11, "Selection Process");

const TEAM_STATUS = {
  NeedFillData: 1,
  NeedMoreMember: 2,
  CanBeSubmited: 3,
  OnReview: 4,
  NeedRevision: 5,
  NeedPayment: 6,
  Accepted: 7,
  WaitingList: 8,
  Declined: 9,
  NeedFurtherData: 10,
  SelectionProcess: 11,
};

export { teamStatusMap, TEAM_STATUS };
