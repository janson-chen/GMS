import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginData, QueryOption } from "./core.data";
import { environment } from "../../../../environments/environment";

@Injectable()
export class UserService {
    token: string;

    constructor(private http: HttpClient) {

    }

    async login(data: LoginData): Promise<any> {
      return this.http.post(`${environment.baseUrl}/account/login`, data).toPromise();
    }


}
