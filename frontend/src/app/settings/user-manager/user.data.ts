export interface UserInfo {
  Id: string;
  UserName: string;
  Name: string;
  Email: string;
  PhoneNumber: string;
  CommunityID: string;
  IsEnabled: boolean;
  IsLockedOut: boolean;
  Roles: string[];
  CreatedBy: string;
  UpdatedBy: string;
  CreatedDate: string;
  UpdatedDate: string;
}

export const USER_MANAGER_TABLE_COLUMES = [
  "用户名",
  "登录名",
  "所属社区",
  "是否启用",
  "登记人",
  "登记时间",
  "操作"
];
