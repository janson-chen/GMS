export interface Risk {
  communityId: string;
  name: string;
  happenDate: string;
  eventType: string;
  area: string;
  content: string;
  isSendMessage: boolean;
  userMemberId: string;
}

export const RISK_MANAGER_TABLE_COLUMES = [
  "社区",
  "事件名称",
  "发生时间",
  "事件类型",
  "事件区域",
  "事件说明",
  "是否发送信息",
  "用户组员",
  "操作"
];
