import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Party } from "./party.data";

@Injectable()
export class PartyService extends DataService<Party> {
  modelType: string = "/business/partyactivities";

  addParty(payload: Party): Promise<Party> {
    return <Promise<Party>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }
}
