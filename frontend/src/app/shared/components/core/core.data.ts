export class QueryOption {
  pageNo: number = 1;

  constructor(options: any) {
    Object.assign(this, options);
  }
}


export interface LoginData {
  userName: string;
  passwordHash: string;
  rememberMe: boolean;
}



export const POPULATION_TABLE_COLUMES = [
  "姓名",
  "社区",
  "是否户主",
  "住户性质",
  "性别",
  "年龄",
  "民族",
  "操作"
];
