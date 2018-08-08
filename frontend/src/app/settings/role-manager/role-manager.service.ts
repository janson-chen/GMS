import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Permission, Role } from "./role.data";

@Injectable()
export class RoleManagerService extends DataService<any> {
  modelType: string = "/account";

  addRole(payload: Role): Promise<Role> {
    return <Promise<Role>>this.http.post(`${this.endpoint}/roles`, payload).toPromise();
  }

  getPermissions(): Promise<Permission[]> {
    return <Promise<Permission[]>>this.http.get(`${this.endpoint}/permissions`).toPromise();
  }

}
