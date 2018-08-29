export interface Population {
  id?: string,
  code?: string;
  communityId?: string;
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

export interface Member {
  populationId?: string;
  personName?: string;
  cardNo?: string;
  sex?: string;
  nation?: string;
  birthDate?: string;
  politicalStatus?: string;
  relation?: string;
  registeredResidence?: string;
  nativePlace?: string;
  peopleType?: string;
  culture?: string;
  marriage?: string;
  rmks?: string;
}

export class Insurance {
  name: string;
  value: string;
}

export const POPULATION_MANAGER_TABLE_COLUMES = [
  "社区",
  "家庭住址",
  "家庭情况",
  "联系方式",
  "住户性质",
  "创建人",
  "创建日期",
  "操作"
];
