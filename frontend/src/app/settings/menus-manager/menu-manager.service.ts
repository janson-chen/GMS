import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Menu } from "../../core/models/menu.data";

@Injectable()
export class MenuManagerService extends DataService<any> {
  modelType: string = "/system";

  addMenu(payload: Menu): Promise<Menu> {
    return <Promise<Menu>>this.http.post(`${this.endpoint}/menu`, payload).toPromise();
  }

  removeMenu(id: string) {
    this.http.delete(`${this.endpoint}/menu/id=${id}`).toPromise();
  }

}
