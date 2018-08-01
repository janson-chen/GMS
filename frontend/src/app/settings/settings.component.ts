import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gm-settings',
    template: `
    <div class="data-entry-panel">
     <gm-menu></gm-menu>
        <div class="data-set">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }

}
