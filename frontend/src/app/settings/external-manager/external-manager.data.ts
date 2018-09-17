export interface BasicSetting {
  id?: string;
  name?: string;
  outSoftwarePath?: string;
  filePath?: string;
  logPath?: string;
  fileMaxSize?: number;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string
}

export const BASIC_SETTING_MANAGER_TABLE_COLUMES = [
  "系统名称",
  "系统路径",
  "文件路径",
  "日志路径",
  "文件上限",
  "创建人员",
  "更新人员",
  "创建日期",
  "更新日期",
  "操作"
];
