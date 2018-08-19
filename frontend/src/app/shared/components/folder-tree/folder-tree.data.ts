import { FileData } from "../../../core/models/menu.data";

export class FolderTree {
  id?: string;
  name?: string;
  menuType?: string;
  parentID?: string;
  icon?: string;
  order_no?: string | number;
  url?: string;
  fileID?: string | number;
  file?: FileData;
  childMenu?: FolderTree[];
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export enum FolderState {
    Folded,
    Expanded
}

export class FolderTreeStorage {
    [key: string]: any;

    get(key: string) {
        return this[key];
    }

    set(key: string, value: any) {
        if (key) {
            this[key] = value;
        }
    }
}

export class FolderTreeWrap {
    folder: FolderTree;
    childMenu: FolderTree[] = [];
}
