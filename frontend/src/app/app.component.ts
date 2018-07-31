import { Component, OnInit } from "@angular/core";
import { UserService } from "./shared/services/user.service";
import { CoreComponent } from "./shared/components/core/core.component";
import { UserInfo } from "./shared/components/core/core.data";

@Component({
  selector: "app",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent extends CoreComponent<UserInfo> implements OnInit {
  constructor(private userService: UserService) {
    super();
  }

  get userInfo() {
    return this.userService.myAccount;
  }

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  };

  public ngOnInit() {
    this.data = this.userInfo;
    console.log("Initial App State");
  }

}
