import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QueryOption } from "./core.data";

@Injectable()
export class CoreService<T> {
    constructor(private http: HttpClient) {

    }

    async getDataList(endpoint: string, query?: QueryOption): Promise<T[]> {
        return <Promise<T[]>>this.http.get(endpoint).toPromise();
    }

    async addData(endpoint: string, data: T): Promise<void> {
        this.http.post(endpoint, data).toPromise();
    }

    async updateData(endpoint: string, data: T): Promise<void> {

    }

    async deleteDataById(endpoint: string, id: string): Promise<void> {

    }

    async getDataById(endpoint: string, id: string): Promise<void> {

    }
}
