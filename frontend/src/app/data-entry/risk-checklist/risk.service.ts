import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Risk } from "./risk.data";

@Injectable()
export class RiskService extends DataService<Risk> {
  modelType: string = "/business/event";

  addRisk(payload: Risk): Promise<Risk> {
    return <Promise<Risk>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }

  async updateRisk(id: string, payload: Risk): Promise<void> {
     this.http.put(`${this.endpoint}/id=${id}`, payload).toPromise();
  }

  async uploadAttachment(id: string, payload: any): Promise<void> {
    this.http.post(`${this.endpoint}/uploadfile/id=${id}`, payload).toPromise();
  }

}
