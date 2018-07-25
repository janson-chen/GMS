import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/components/core/user.service";

@Component({
  selector: "gm-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor (private userService: UserService) {

  }
  get isLoggedIn() {
    return this.userService.isLoggedIn;
  };

  public ngOnInit() {
    console.log("hello `Home` component");

  }
}
