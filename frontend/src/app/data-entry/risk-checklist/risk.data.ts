export interface Risk {
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

export const RISK_MANAGER_TABLE_COLUMES = [
  "姓名",
  "社区",
  "是否户主",
  "住户性质",
  "性别",
  "年龄",
  "民族",
  "操作"
];
