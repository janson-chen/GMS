export class QueryOption {
    pageNo: number = 1;
    category: string;

    constructor(options: any) {
        Object.assign(this, options);
    }
}


export interface LoginData {
  username: string;
  password: string;
}
