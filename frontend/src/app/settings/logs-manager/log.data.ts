import { ResponseData } from "../../shared/components/core/core.data";

export interface Log extends ResponseData<Log> {
  id?: string;
  content?: string;
  userName?: string;
  date?: string;
  logType?: string;
}

export const LOG_MANAGER_TABLE_COLUMES = [
  "操作类型",
  "操作人员",
  "操作内容",
  "操作时间"
];
