export interface Population {
  id?: string,
  code?: string;
  communityId?: string;
  communityName?: string;
  familyType?: string;
  familyAddress?: string;
  familyPhone?: string;
  familyContent?: string;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export interface Member {
  id?: string;
  populationId?: string;
  populationCode?: string;
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
  "社区",
  "家庭住址",
  "家庭情况",
  "联系方式",
  "住户性质",
  "创建人",
  "创建日期",
  "操作"
];

export const POPULATION_FAMILY_MANAGER_TABLE_COLUMES = [
  "姓名",
  "身份证号",
  "性别",
  "民族",
  "出生日期",
  "政治面貌",
  "与户主关系",
  "户口",
  "户口所在地",
  "文化程度",
  "婚姻状况",
  "备注",
  "操作"
];
