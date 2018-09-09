import { Injectable, Optional } from '@angular/core';
import { QueryOptions } from "../interface/data.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Http } from "@angular/http";

export interface QueryOptions {

}

@Injectable()
export class DataService<T> {
    modelType: string = "";

    get endpoint() {
      return `${environment.baseUrl}${this.modelType}`
    }

    constructor(protected http: HttpClient, protected nHttp?: Http) {

    }

    getById (id: string, urlSegment: string = ""): Promise<T> {
        return <Promise<T>>this.http.get(`${this.endpoint}${urlSegment}${id}`).toPromise();
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

    removeItem (id: string, urlSegment?: string): Promise<void> {
       return <Promise<any>>this.http.delete(`${this.endpoint}${urlSegment ? urlSegment : ''}/id=${id}`).toPromise();
    }

    query(urlSegment?: string, queryOptions?: any): Promise<any> {
      return <Promise<any>>this.http.post(`${this.endpoint}/${urlSegment}`, queryOptions).toPromise();
    }
}
