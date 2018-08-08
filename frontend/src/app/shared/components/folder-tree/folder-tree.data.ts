export class FolderTree {
     id: string;
     name?: string;
     fullpath?: string;
     files?: FilesItem[];
     directories?: FolderTree[];
}

export class FilesItem {
     name?: string;
     fullpath?: string;
     size?: number;
     type?: string;
     metadata?: object;
     token?: string;
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
    directories: FolderTree[] = [];
    files: FilesItem[] = [];
}
