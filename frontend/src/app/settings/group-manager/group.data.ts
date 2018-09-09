export interface UserGroup {
  id?: string;
  name?: string;
}

export interface GroupResponse {
  detail?: UserGroup[];
}

export class UserMember {
  id?: 0;
  name?: string;
  events?: any[];
  userMemberDetails?: any[];
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string
}

export class UserEvent {

}

export const GROUP_MANAGER_TABLE_COLUMES = [
  "用户组ID",
  "用户组名",
  // "创建日期",
  // "更新时间",
  // "更新人员",
  // "创建人员",
  "操作"
];
