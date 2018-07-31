import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gm-data-entry',
    template: `
    <div class="data-entry-panel">
     <gm-menu></gm-menu>
        <div class="data-set">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    styleUrls: ["./data-entry.component.scss"]
})
export class DataEntryComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }

}
