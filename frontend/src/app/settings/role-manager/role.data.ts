export interface UserInfo {
  id?: string;
  userName?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  communityID?: string;
  isEnabled?: boolean;
  isLockedOut?: boolean;
  roles?: string[];
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export interface Permission {
  name?: string;
  value?: string;
  groupName?: string;
  description?: string;
}

export interface Role {
  name?: string;
  Name?: string;
  Description?: string;
  description?: string;
  UersCount?: number | string;
  uersCount?: number | string;
  Permissions?: Permission[];
  permissions?: Permission[];
}

export const USER_MANAGER_TABLE_COLUMES = [
  "角色名",
  "角色描述",
  "用户数量",
  "拥有权限",
  "操作"
];
