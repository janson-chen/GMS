import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { UserService } from "./shared/components/core/user.service";

@Component({
  selector: "app",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  get isLoggedIn() {
    console.log(this.userService.isLoggedIn);
    return this.userService.isLoggedIn;
  };

  constructor(private userService: UserService) {

  }

  public ngOnInit() {
    console.log("Initial App State");
  }

}
