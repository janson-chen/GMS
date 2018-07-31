/**
 * Created by haochen on 2018/5/28.
 */
export interface MenuData {
    key: string;
    value: string;
    children: MenuData[];
}

export const MENUS = {
  data: [
      {
          key: "数据录入",
          value: "/entry",
          children: [
              {
                  key: "人口信息表",
                  value: "/population",
                  children: []
              },
              {
                  key: "安全隐患排查表",
                  value: "/risk",
                  children: []
              },
             {
                  key: "党建活动表",
                  value: "/party",
                  children: []
              },

          ]
      },
      {
          key: "数据统计",
          value: "",
          children: [

          ]
      },
      {
          key: "系统设置",
          value: "/settings",
          children: [

          ]
      }
  ]
};
