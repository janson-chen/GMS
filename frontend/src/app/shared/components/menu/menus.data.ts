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
        }

      ]
    },
    {
      key: "数据统计",
      value: "",
      children: [
        {
          key: "人口信息统计",
          value: "/population",
          children: []
        },
        {
          key: "居民信息统计",
          value: "/risk",
          children: []
        },
        {
          key: "安全隐患统计",
          value: "/party",
          children: []
        }
      ]
    },
    {
      key: "系统设置",
      value: "/settings",
      children: [
        {
          key: "社区管理",
          value: "/community",
          children: []
        },
        {
          key: "角色管理",
          value: "/roles",
          children: []
        },
        {
          key: "用户管理",
          value: "/users",
          children: []
        },
        {
          key: "菜单管理",
          value: "/menus",
          children: []
        },
        {
          key: "日志管理",
          value: "/risk",
          children: []
        },
        {
          key: "外界软件",
          value: "/party",
          children: []
        }
      ]
    }
  ]
};
