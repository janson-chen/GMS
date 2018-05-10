import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { environment } from "environments/environment";
import { AppState } from "./app.service";

@Component({
    selector: "app",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    constructor() {}

    public ngOnInit() {
        console.log("Initial App State");
    }
}
