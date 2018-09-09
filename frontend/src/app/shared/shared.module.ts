import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { PIPES } from "./pipes";
import { DataService } from "./services/data.service";
import { OptionComponent } from './components/menu/option/option.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppService } from "../app.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpModule } from "@angular/http";
import { BsDatepickerModule } from "ngx-bootstrap";

@NgModule({
    imports: [
        FontAwesomeModule,
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        NgbModule,
        BsDatepickerModule
    ],
    declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    providers: [DataService, AppService]
})
export class SharedModule {

}
