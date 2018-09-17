import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";

@Injectable()
export class ExternalManagerService extends DataService<any> {
  modelType: string = "/system";

  async updateBasicSetting(id: string, payload: any): Promise<void> {
    this.http.put(`${this.endpoint}/basicsetting/id=${id}`, payload).toPromise();
  }

  async updateExternalSetting(id: string, payload: any): Promise<void> {
    this.http.patch(`${this.endpoint}/basicsetting/id=${id}`, payload).toPromise();
  }

}
