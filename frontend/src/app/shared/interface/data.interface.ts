export interface DataInterface<T> {
    getById: (id: string) => Promise<T>;
    getList: (queryOptions: QueryOptions) => Promise<T[]>;
    update: (args: T) => void;
    add: (args: T) => Promise<T>;
}


export class QueryOptions {
    private limit: number = 10;
    private pageCount: number = 1;

    constructor(args: any) {
        Object.assign(this, args);
    }
}
