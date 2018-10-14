import { SearchData, SearchType } from "../../shared/components/search-bar/search-bar.interface";

export interface Risk {
  id?: string;
  communityId?: string;
  name?: string;
  happenDate?: string;
  eventType?: string;
  area?: string;
  content?: string;
  isSendMessage?: boolean;
  userMemberId?: string;
}

export const RISK_MANAGER_TABLE_COLUMES = [
  "社区",
  "事件名称",
  "发生时间",
  "事件类型",
  "事件区域",
  "事件说明",
  "是否发送信息",
  "用户组",
  "操作"
];

export const SEARCH_DATA: SearchData[] = [
  {
    key: "communityName",
    label: "社区名称",
    type: SearchType.Ttext
  },
  {
    key: "name",
    label: "事件名称",
    type: SearchType.Ttext
  },
  {
    key: "happenDate",
    label: "发生时间",
    type: SearchType.Tdate
  },
  {
    key: "startHappenDate",
    label: "开始时间",
    type: SearchType.Tdate
  },
  {
    key: "endHappenDate",
    label: "结束时间",
    type: SearchType.Tdate
  },
  {
    key: "eventType",
    label: "事件类型",
    options: ["紧急", "普通"],
    type: SearchType.Tselect
  },
  {
    key: "area",
    label: "事件地点",
    type: SearchType.Ttext
  },
  {
    key: "orderBy",
    label: "排序",
    options: ["createdDate", "updatedDate", "createdBy", "updatedBy", "id", "name", "happenDate", "startHappenDate", "endHappenDate", "eventType"],
    type: SearchType.Tselect
  },
];
