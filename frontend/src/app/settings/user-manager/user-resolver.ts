import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Role } from "./role.data";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { UserInfo } from "./user.data";
import { UserManagerService } from "./user-manager.service";

@Injectable()
export class UserResolver extends DataService<UserInfo[]> implements Resolve<UserInfo[]> {

  constructor(private userManagerService: UserManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInfo[]> | Promise<UserInfo[]> | UserInfo[] {
    return this.userManagerService.getList("/page=-1/pageSize=-1");
  }

}
