import { Injectable } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Log } from "./log.data";

@Injectable()
export class LogManagerService extends DataService<any> {
  modelType: string = "/logs/query";

  // 导出日志
  async exportLogs(startDate: string, endDate: string): Promise<Log[]> {
    return <Promise<Log[]>>this.http.post(`logs/export`, {
      startDate: startDate,
      endDate: endDate
    }).toPromise();
  }
}
