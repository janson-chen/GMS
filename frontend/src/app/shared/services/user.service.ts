import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginData, UserInfo } from "../components/core/core.data";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  constructor(private router: Router, private http: HttpClient) {

  }

  private _myAccount: UserInfo;
  get myAccount() {
    if (this._myAccount) {
      return this._myAccount;
    } else {
      const userInfo = localStorage.getItem("userInfo");
      return userInfo && JSON.parse(userInfo);
    }
  }

  set myAccount(value: UserInfo) {
    this._myAccount = value;
    localStorage.setItem("userInfo", JSON.stringify(value));
  }

  get isLoggedIn() {
    return !!localStorage.getItem("isLoggedIn");
  }

  set isLoggedIn(value: any) {
    localStorage.setItem("isLoggedIn", value);
  }

  async login(data: LoginData): Promise<any> {
    const result = await this.http.post(`${environment.baseUrl}/account/login`, data).toPromise();
    if (result) {
      this.isLoggedIn = "true";
      this.myAccount = await this.getUserInfo();
      this.router.navigate(["/home"]);
      return true;
    }
    return false;
  }

  async logout(): Promise<void> {
    const result = await this.http.post(`${environment.baseUrl}/account/logout`, {}).toPromise();
    console.log("logout result", result);
    if(result) {
      this.myAccount = null;
      localStorage.clear();
    }

  }

  async getUserInfo(): Promise<any> {
    return this.http.get(`${environment.baseUrl}/account/users/me`).toPromise();
  }


}