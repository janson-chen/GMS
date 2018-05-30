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
          key: "菜单一",
          value: "",
          children: [
              {
                  key: "菜单一/子菜单一",
                  value: "",
                  children: []
              },
              {
                  key: "菜单一/子菜单二",
                  value: "",
                  children: []
              }
          ]
      },
      {
          key: "菜单二",
          value: "",
          children: [
              {
                  key: "菜单二/子菜单一",
                  value: "",
                  children: []
              },
              {
                  key: "菜单二/子菜单二",
                  value: "",
                  children: []
              }
          ]
      },
      {
          key: "菜单三",
          value: "",
          children: [
              {
                  key: "菜单三/子菜单一",
                  value: "",
                  children: []
              },
              {
                  key: "菜单三/子菜单二",
                  value: "",
                  children: []
              }
          ]
      }
  ]
};