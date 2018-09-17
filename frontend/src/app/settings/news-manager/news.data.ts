export interface News {
  id?: string;
  createdBy?: string;
  createdDate?: string;
  file?: any;
  fileId?: string;
  title?: string;
  updatedBy?: string;
  updatedDate?: string;
}

export const NEWS_TABLE_COLUMES = [
  "新闻名称",
  "创建时间",
  "创建人",
  "更新时间",
  "更新人员",
  "操作"
];
