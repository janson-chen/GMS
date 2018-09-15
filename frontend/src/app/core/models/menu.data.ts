export class Menu {
  id?: string;
  name?: string;
  menuType?: string;
  parentId?: string;
  icon?: string;
  orderNo?: string | number;
  url?: string;
  fileId?: string | number;
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
