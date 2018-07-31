import { Component, OnInit, HostListener, Input, EventEmitter, Output, Renderer2, ElementRef } from '@angular/core';
import { CoreComponent } from "../../core/core.component";
import { MenuData } from "../menus.data";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from "@angular/router";

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
  @Input() parentValue: string = "";
  @Output() subClickedTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();

  children: MenuData[] = [];
  showChildren: boolean = false;
  state: "in" | "out" = "in";

  constructor(private router: Router, private render: Renderer2, private elementRef: ElementRef) {
    super();
  }

  @HostListener("mouseover")
  onMouseOver() {
    this.showChildren = true;
    // this.render.setStyle(this.elementRef.nativeElement, "background", "#ccc");
  }


  @HostListener("mouseleave")
  onMouseLeave() {
    this.showChildren = false;
  }

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.subClickedTrigger.emit(true);
    this.router.navigate([`${this.parentValue}${this.data.value}`]);
  }

  ngOnInit() {
    this.children = this.data.children;
    const hostMenu = this.elementRef.nativeElement;
    const subMenuPanel = document.querySelector(".sub-menu-options");
    console.log("width", hostMenu.getBoundingClientRect());
    if (subMenuPanel) {
      this.render.setStyle(subMenuPanel, "left", "160px");
      this.render.setStyle(subMenuPanel, "top", "0px");
    }
  }

  closeSubmenus() {
    this.showChildren = false;
  }

}
