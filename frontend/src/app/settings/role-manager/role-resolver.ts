import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Role } from "./role.data";
import { Observable } from "rxjs/Observable";
import { RoleManagerService } from "./role-manager.service";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RoleResolver extends DataService<Role[]> implements Resolve<Role[]> {

  constructor(private roleManagerService: RoleManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role[]> | Promise<Role[]> | Role[] {
    return this.roleManagerService.getList("/roles/page=-1/pageSize=-1");
  }

}
