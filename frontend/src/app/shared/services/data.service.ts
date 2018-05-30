import { Injectable } from '@angular/core';
import { DataInterface } from "../interface/data.interface";
import { QueryOptions } from "../interface/data.interface";

@Injectable()
export class DataService<T> implements DataInterface<T> {

    constructor() {

    }

    getById (id: string): Promise<T> {
        return null;
    };

    getList (queryOptions?:QueryOptions): Promise<T[]> {
        return  null;
    };

    update (args:T): Promise<T> {
        return null;
    };

    add (args:T): Promise<T> {
        return null;
    };

}
