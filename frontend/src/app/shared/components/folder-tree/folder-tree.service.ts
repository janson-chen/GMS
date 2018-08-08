import { Injectable } from "@angular/core";
import { FolderTree } from "./folder-tree.data";

@Injectable()
export class FolderTreeService {
    selected: boolean = false;

  async getSubFolderTreeById(id: string): Promise<FolderTree> {
    return null;
  }
}
