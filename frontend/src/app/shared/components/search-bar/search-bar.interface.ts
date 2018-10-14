export interface SearchData {
    key: string;
    label?: string;
    value?: any;
    options?: string[];
    type: SearchType;
}

export enum SearchType {
  Tdate,
  Ttext,
  Tselect,
  Tcheckbox
}
