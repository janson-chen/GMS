export class Menu {
  id?: string;
  name?: string;
  menuType?: string;
  parentID?: string;
  icon?: string;
  order_no?: string | number;
  url?: string;
  fileID?: string | number;
  file?: FileData;
  childMenu?: Menu[];
  createdBy?: string;
  updatedBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export class FileData {
  id?: string;
  fileName?: string;
  filePath?: string;
  fileSize?: string;
  uploadPerson?: string;
  uploadDate?: string;
}
