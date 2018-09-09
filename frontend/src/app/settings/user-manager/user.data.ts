import { Role } from "../role-manager/role.data";

export interface UserInfo {
  Id?: string;
  userName?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  communityId?: string;
  isEnabled?: boolean;
  isLockedOut?: boolean;
  roles?: Role[] | string[];
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string;
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
