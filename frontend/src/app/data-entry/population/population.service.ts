import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Population } from "./population.data";

@Injectable()
export class PopulationService extends DataService<Population> {
  modelType: string = "/business/population";

  addPopulation(payload: Population): Promise<Population> {
    return <Promise<Population>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }

}
