import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: "gm-core",
    template: ""
})
export abstract class CoreComponent<T> {
    @Input() data: T;



    constructor() { }

}
