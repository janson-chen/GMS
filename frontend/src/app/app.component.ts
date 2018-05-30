import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { environment } from "environments/environment";
import { AppService } from "./app.service";

@Component({
    selector: "app",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    isLogged: boolean = false;

    constructor(private appService: AppService) {
        this.isLogged = this.appService.isLogged;
    }

    public ngOnInit() {
        console.log("Initial App State");
    }
}
