import { Injectable } from '@angular/core';
import { QueryOptions } from "../interface/data.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Population } from "../../data-entry/population/population.data";

export interface QueryOptions {

}

@Injectable()
export class DataService<T> {
    modelType: string = "";

    get endpoint() {
      return `${environment.baseUrl}${this.modelType}`
    }

    constructor(protected http: HttpClient) {

    }

    getById (id: string): Promise<T> {
        return <Promise<T>>this.http.get(`${this.endpoint}/${id}`).toPromise();
    };

    getList (url?: string, queryOptions?: QueryOptions): Promise<T[]> {
        url = url ? url : "";
        return <Promise<T[]>>this.http.get(`${environment.baseUrl}${this.modelType}${url}`, {}).toPromise();
    };

    update (model: T): void {
         this.http.patch(`${environment.baseUrl}${this.modelType}`, model).toPromise();
    };

    add (model:T): Promise<T> {
        return <Promise<T>>this.http.post(`${environment.baseUrl}${this.modelType}`, model).toPromise();
    };

    removeItem (urlSegment: string, id: string): Promise<void> {
       return <Promise<any>>this.http.delete(`${this.endpoint}/${urlSegment}/id=${id}`).toPromise();
    }

    query(urlSegment?: string, queryOptions?: any): Promise<Population[]> {
      return <Promise<Population[]>>this.http.post(`${this.endpoint}/${urlSegment}`, queryOptions).toPromise();
    }
}
