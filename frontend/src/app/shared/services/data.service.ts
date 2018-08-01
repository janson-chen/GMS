import { Injectable } from '@angular/core';
import { DataInterface } from "../interface/data.interface";
import { QueryOptions } from "../interface/data.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class DataService<T> implements DataInterface<T> {
    modelType: string = "";

    get endpoint() {
      return `${environment.baseUrl}${this.modelType}`
    }

    constructor(protected http: HttpClient) {

    }

    getById (id: string): Promise<T> {
        return <Promise<T>>this.http.get(`${this.endpoint}/${id}`).toPromise();
    };

    getList (queryOptions?:QueryOptions): Promise<T[]> {
        return <Promise<T[]>>this.http.get(`${environment.baseUrl}${this.modelType}`).toPromise();
    };

    update (model: T): void {
         this.http.patch(`${environment.baseUrl}${this.modelType}`, model).toPromise();
    };

    add (model:T): Promise<T> {
        return <Promise<T>>this.http.post(`${environment.baseUrl}${this.modelType}`, model).toPromise();
    };

}
