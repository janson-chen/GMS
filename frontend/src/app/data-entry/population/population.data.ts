export interface Population {
  id?: string,
  code?: string;
  communityID?: string;
  communityName?: string;
  family_Type?: string;
  family_Address?: string;
  family_Phone?: string;
  family_Content?: string;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export class Insurance {
  name: string;
  value: string;
}

export const POPULATION_MANAGER_TABLE_COLUMES = [
  "姓名",
  "社区",
  "是否户主",
  "住户性质",
  "性别",
  "年龄",
  "民族",
  "操作"
];