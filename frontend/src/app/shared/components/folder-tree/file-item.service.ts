import { Injectable } from "@angular/core";
import { FilesItem } from "./folder-tree.data";
import { DataService } from "../../services/data.service";

@Injectable()
export class FileItemService extends DataService<FilesItem> {
    modelType = "";
}
