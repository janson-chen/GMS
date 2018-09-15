export interface UserGroup {
  id?: string;
  name?: string;
}

export interface GroupResponse {
  detail?: UserGroup[];
}

export interface GroupMembersResponse {
  detail?: UserGroupMember[];
}

export class UserGroupMember {
  userMemberId?: string;
  userMemberName?: string;
  userId?: string;
  userName?: string;
}

export class UserEvent {

}

export const GROUP_MANAGER_TABLE_COLUMES = [
  "用户组ID",
  "用户组名",
  "操作"
];

export const GROUP_MEMBER_MANAGER_TABLE_COLUMES = [
  "用户ID",
  "用户名",
  "用户组成员ID",
  "用户组成员名",
  "操作"
];
