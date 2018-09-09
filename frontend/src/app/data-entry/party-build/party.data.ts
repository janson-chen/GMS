export interface Party {
  communityId: string;
  subject: string;
  activitiesDate: string;
  activitiesPlace: string;
  joinAmount: number;
  realAmount: number;
  leaveAmount: number;
  form: string;
  content: string;
}

export const PARTY_MANAGER_TABLE_COLUMES = [
  "社区",
  "活动名称",
  "活动形式",
  "参与人数",
  "活动时间",
  "活动地点",
  "活动内容",
  "操作"
];


export interface PartyResponse {
  detail: Party[];
  totalCount: number;
}
