import { Component, Input } from '@angular/core';
import { CoreComponent } from "./core.component";
import { QueryOption } from "./core.data";
import { DataService } from "../../services/data.service";

@Component({
    selector: "gm-core",
    template: ""
})
export abstract class ListComponent<T> extends CoreComponent<T>{
    @Input() dataList: T[];
    endpoint: string = "";

    constructor(private dataService: DataService<T>){
        super();
    }

    async getDataList(query: QueryOption): Promise<T[]> {
        return await this.dataService.getList(this.endpoint, query);
    };

    async addData(data: T): Promise<void> {
        await this.dataService.add(data);
    };

    async updateData(T): Promise<void> {
        await this.dataService.update(T);
    };

    async deleteDataById(id: string): Promise<void> {
        await this.dataService.removeItem(id, this.endpoint);
    };
}
