import { Component, OnInit } from "@angular/core";

import { AppState } from "../app.service";

@Component({
  selector: "gm-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log("hello `Home` component");
  }
}
