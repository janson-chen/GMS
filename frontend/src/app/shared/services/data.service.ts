import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Http } from "@angular/http";
import { QueryOption } from "../components/core/core.data";

@Injectable()
export class DataService<T> {
    modelType: string = "";

    get endpoint() {
      return `${environment.baseUrl}${this.modelType}`
    }

    get queryUrl() {
      const query = new QueryOption();
      return `page=${query.page}/pageSize=${query.pageSize}`;

    }

    constructor(protected http: HttpClient, protected nHttp?: Http) {

    }

    getById (id: string, urlSegment: string = ""): Promise<T> {
        return <Promise<T>>this.http.get(`${this.endpoint}${urlSegment}${id}`).toPromise();
    };

    getList (url?: string, queryOptions?: any): Promise<T[]> | any {
        url = url ? url : "";
        return <Promise<T[]>>this.http.get(`${environment.baseUrl}${this.modelType}${url}`, {params: queryOptions}).toPromise();
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
