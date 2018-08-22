import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { DataService } from "../../shared/services/data.service";
import { HttpClient } from "@angular/common/http";
import { Population } from "./population.data";
import { PopulationService } from "./population.service";

@Injectable()
export class PopulationResolver extends DataService<Population> implements Resolve<Population[]> {

  constructor(private populationService: PopulationService, protected http: HttpClient) {
    super(http);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Population[]> | Promise<Population[]> | Population[] {
    // return this.populationService.getList("/query/page=1/pageSize=20");
    return new Promise((resolve, reject)=> {
      resolve([]);
    });
  }

}
