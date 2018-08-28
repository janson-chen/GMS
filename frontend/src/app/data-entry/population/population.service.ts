import { Injectable } from "@angular/core";

import { DataService } from "../../shared/services/data.service";
import { Member, Population } from "./population.data";

@Injectable()
export class PopulationService extends DataService<Population> {
  modelType: string = "/business/population";

  addPopulation(payload: Population): Promise<Population> {
    return <Promise<Population>>this.http.post(`${this.endpoint}`, payload).toPromise();
  }

  // 家庭成员信息修改(/Business/Population/Family/Id={Id})
  updateMember(id: string, payload: Member): Promise<void> {
    return this.http.patch(`${this.endpoint}/family/id=${id}`, payload).toPromise();
  }

  // 删除家庭成员信息 /Business/Population/Families
  deleteMember(id: string): Promise<void> {
    return this.http.delete(`${this.endpoint}/families/id=${id}`).toPromise();
  }

  // 兵役信息修改 /Business/Population/Armies
  updateArmies(armies: any[]): Promise<void> {
    return this.http.put(`${this.endpoint}/armies`, payload).toPromise();
  }

  // 残疾信息修改 /Business/Population/Disabilities
  updateDisableInfo(disables: any[]): Promise<void> {
    return this.http.put(`${this.endpoint}/disabilities`, payload).toPromise();
  }

  // 网格登记表修改(/Business/Population/Id={Id})
  updatePopulation(id: string, payload: Population): Promise<void> {
    return this.http.put(`${this.endpoint}/id=${id}`, payload).toPromise();
  }

  // 删除网格登记表 /Business/Population/Id={Id}
  deletePopulation(id: string): Promise<void> {
    return this.http.delete(`${this.endpoint}/id=${id}`).toPromise();
  }

  // 党派信息修改 /Business/Population/Parties
  updateParty(parties: any[]): Promise<void> {
    return this.http.put(`${this.endpoint}/parties`, payload).toPromise();
  }
}
