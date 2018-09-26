export interface Dictionary {
  id?: string;
  code?: string;
  text?: string;
  dictionaryId?: string;
  dictionaryCode?: string;
  dictionaryText?: string;
  value?: any;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string
}

export const DICTIONARY_MANAGER_TABLE_COLUMES = [
  "字典ID",
  "字典编码",
  "字典值",
  "创建人员",
  "更新人员",
  "创建日期",
  "更新日期",
  "操作"
];


export const DICTIONARY_DETAIL_MANAGER_TABLE_COLUMES = [
  "ID",
  "字典ID",
  "字典编码",
  "字典名称",
  "字典实际值",
  "创建人员",
  "更新人员",
  "创建日期",
  "更新日期",
  "操作"
];
