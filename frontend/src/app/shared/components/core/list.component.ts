import { Component, OnInit, Input } from '@angular/core';
import { CoreComponent } from "./core.component";
import { QueryOption } from "./core.data";
import { CoreService } from "./core.service";

@Component({
    selector: "gm-core",
    template: ""
})
export abstract class ListComponent<T> extends CoreComponent<T>{
    @Input() dataList: T[];
    endpoint: string = "";

    constructor(private coreService: CoreService<T>){
        super();
    }

    async getDataList(query: QueryOption): Promise<T[]> {
        return await this.coreService.getDataList(this.endpoint, query);
    };

    async addData(data: T): Promise<void> {
        await this.coreService.addData(this.endpoint, data);
    };

    async updateData(T): Promise<void> {
        await this.coreService.updateData(this.endpoint, T);
    };

    async deleteDataById(id: string): Promise<void> {
        await this.coreService.deleteDataById(this.endpoint, id);
    };


}
