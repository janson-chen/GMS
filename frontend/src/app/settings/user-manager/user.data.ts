export interface UserInfo {
  id: string;
  userName: string;
  name: string;
  email: string;
  phoneNumber: string;
  communityID: string;
  isEnabled: boolean;
  isLockedOut: boolean;
  roles: string[];
  createdBy: string;
  updatedBy: string;
  createdDate: string;
  updatedDate: string;
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
