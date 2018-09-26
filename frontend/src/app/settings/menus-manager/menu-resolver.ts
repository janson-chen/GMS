import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Role } from "./role.data";
import { Observable } from "rxjs";
import { RoleManagerService } from "./role-manager.service";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Menu } from "../../core/models/menu.data";
import { MenuManagerService } from "./menu-manager.service";

@Injectable()
export class MenuResolver extends DataService<Menu[]> implements Resolve<Menu[]> {

  constructor(private menuManagerService: MenuManagerService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu[]> | Promise<Menu[]> | Menu[] {
    return this.menuManagerService.getList(`/menus/${this.queryUrl}`);
  }

}
