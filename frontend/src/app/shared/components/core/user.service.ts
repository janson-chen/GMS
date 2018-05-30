import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QueryOption } from "./core.data";

@Injectable()
export class UserService {
    token: string;

    constructor(private http: HttpClient) {

    }


}
