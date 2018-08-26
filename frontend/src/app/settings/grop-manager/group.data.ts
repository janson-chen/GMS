export interface UserGroup {
  userMemberID?: 0;
  userMemberName?: string;
  userID?: string;
  userName?: string;
  userMember?: UserMember;
}

export class UserMember {
  id?: 0;
  name?: string;
  events?: any[];
  userMemberDetails?: [
    {
      userMemberID?: 0;
      userID?: string;
      createdBy?: string;
      updatedBy?: string;
      createdDate?: string;
      updatedDate: string
    }
    ];
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string
}

export class UserEvent {

}

export const GROUP_MANAGER_TABLE_COLUMES = [
  "用户名",
  "登录名",
  "所属社区",
  "是否启用",
  "登记人",
  "登记时间",
  "操作"
];
