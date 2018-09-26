export class QueryOption {
  page: number = 1;
  pageSize: number = 10;
  totalCount: number = 10;

  constructor(options?: any) {
    Object.assign(this, options);
  }
}

export interface LoginData {
  userName: string;
  passwordHash: string;
  rememberMe: boolean;
}

export interface PageData {
  page: number;
  itemsPerPage: number;
}

export class ResponseData<T> {
  detail: T[];
  totalCount: number;
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
