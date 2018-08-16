import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { UserInfo } from "./user.data";

@Injectable()
export class UserManagerService extends DataService<UserInfo> {
  modelType: string = "/account/users";

  addUser(payload: UserInfo): Promise<UserInfo> {
    return <Promise<UserInfo>>this.http.post(`${this.endpoint}/register`, payload).toPromise();
  }

}
