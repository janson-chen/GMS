import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Insurance, Population } from "./population.data";

@Injectable()
export class PopulationService extends DataService<Population> {
  modelType: string = "/business/population";

  addPopulation(payload: Population): Promise<Population> {
    return <Promise<Population>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }

  getInsurances(): Promise<Insurance[]> {
    return <Promise<Insurance[]>>this.http.get(`${this.endpoint}/insurances`).toPromise();
  }

}
