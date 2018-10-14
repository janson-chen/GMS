import { ResponseData } from "../../shared/components/core/core.data";
import { SearchData, SearchType } from "../../shared/components/search-bar/search-bar.interface";

export class Log extends ResponseData<Log> {
  id?: string = "";
  content?: string = "";
  userName?: string = "";
  date?: string = "";
  logType?: string = "";
}

export const LOG_MANAGER_TABLE_COLUMES = [
  "操作类型",
  "操作人员",
  "操作内容",
  "操作时间"
];

export const SEARCH_DATA: SearchData[] = [
  {
    key: "userName",
    label: "用户名称",
    type: SearchType.Ttext
  },
  {
    key: "orderBy",
    label: "排序",
    options: Object.keys(new Log()),
    type: SearchType.Tselect
  },
  {
    key: "startDate",
    label: "起始日期",
    type: SearchType.Tdate
  },
  {
    key: "endDate",
    label: "结束日期",
    type: SearchType.Tdate
  },
  {
    key: "logType",
    label: "操作类型",
    options: ["Add", "Delete", "Update"],
    type: SearchType.Tselect
  }
];
