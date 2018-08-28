import { Component, OnInit } from "@angular/core";
import { UserService } from "./shared/services/user.service";
import { CoreComponent } from "./shared/components/core/core.component";
import { UserInfo } from "./settings/user-manager/user.data";
import { MenuManagerService } from "./settings/menus-manager/menu-manager.service";
import { MenusService } from "./core/service/menus.service";

@Component({
  selector: "app",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent extends CoreComponent<UserInfo> implements OnInit {
  constructor(
    private userService: UserService,
    private menuManagerService: MenuManagerService,
    private menusService: MenusService
  ) {
    super();
  }

  get userInfo() {
    return this.userService.myAccount;
  }

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  };

  async ngOnInit() {
    if (this.isLoggedIn) {
      this.data = this.userInfo;
      // get menus
      if (!this.menusService.menus) {
        this.menusService.menus = await this.menuManagerService.getList("/menus");
      }
    }
  }
}
