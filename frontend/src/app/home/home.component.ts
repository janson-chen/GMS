import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user.service";
import { MenusService } from "../core/service/menus.service";
import { Menu } from "../core/models/menu.data";

@Component({
  selector: "gm-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  menus: Menu[];

  constructor(
    private userService: UserService,
    private menesService: MenusService
  ) {

  }

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  };

  public ngOnInit() {
    console.log("hello `Home` component");
    this.menus = this.menesService.menus;

  }
}
