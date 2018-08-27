import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Risk } from "./risk.data";

@Injectable()
export class RiskService extends DataService<Risk> {
  modelType: string = "/business/event";

  addRisk(payload: Risk): Promise<Risk> {
    return <Promise<Risk>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }

}
