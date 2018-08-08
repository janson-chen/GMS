export interface Community {
  id: string;
  name: string,
  parentId: string | number,
  childCommunity: Community[],
  createdBy: string,
  updatedBy: string,
  createdDate: string,
  updatedDate: string
}



export const COMMUNITY_TABLE_COLUMES = [
  "社区名",
  "所属社区",
  "登记人",
  "登记时间",
  "操作"
];
