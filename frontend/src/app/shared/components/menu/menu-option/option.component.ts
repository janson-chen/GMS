import { Component, OnInit, HostListener, Input, EventEmitter, Output, Renderer2, ElementRef } from '@angular/core';
import { CoreComponent } from "../../core/core.component";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from "@angular/router";
import { Menu } from "../../../../core/models/menu.data";

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
export class MenuOptionComponent extends CoreComponent<Menu> implements OnInit {
  @Input() parentValue: string = "";
  @Output() subClickedTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();

  children: Menu[] = [];
  showChildren: boolean = false;
  state: "in" | "out" = "in";

  constructor(private router: Router, private render: Renderer2, private elementRef: ElementRef) {
    super();
  }

  @HostListener("mouseover", ["$event"])
  onMouseOver(event: MouseEvent) {
    this.showChildren = true;
    setTimeout(() => {
      const subMenuPanel = this.elementRef.nativeElement.querySelector(".sub-menu-options");
      if (subMenuPanel) {
        if (subMenuPanel) {
          this.render.setStyle(subMenuPanel, "left", "160px");
          this.render.setStyle(subMenuPanel, "top", "0px");
        }
      }
    });
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.showChildren = false;
  }

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.subClickedTrigger.emit(true);
    this.router.navigate([`${this.parentValue}${this.data.url}`]);
  }

  ngOnInit() {
    this.children = this.data.childMenu;
  }

  closeSubmenus() {
    this.showChildren = false;
  }

}
