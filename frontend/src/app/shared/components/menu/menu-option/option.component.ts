import { Component, OnInit, HostListener } from '@angular/core';
import { CoreComponent } from "../../core/core.component";
import { MenuData } from "../menus.data";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'gm-menu-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.scss'],
    animations: [
        trigger('menuState', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
})
export class MenuOptionComponent extends CoreComponent<MenuData> implements OnInit {
    children:MenuData[] = [];
    showChildren:boolean = false;
    state: "in" | "out" = "in";

    constructor() {
        super();
    }

    @HostListener("mouseover")
    onMouseOver() {
        this.showChildren = true;
    }


    @HostListener("mouseleave")
    onMouseLeave() {
        this.showChildren = false;
    }

    ngOnInit() {
        this.children = this.data.children;
    }

}
