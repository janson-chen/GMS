import { SearchData, SearchType } from "../../shared/components/search-bar/search-bar.interface";

export interface UserGroup {
  id?: string;
  name?: string;
}

export interface GroupResponse {
  detail?: UserGroup[];
  totalCount?: number;
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


export const SEARCH_DATA: SearchData[] = [
  {
    key: "name",
    label: "用户组名称",
    type: SearchType.Ttext
  }
];
