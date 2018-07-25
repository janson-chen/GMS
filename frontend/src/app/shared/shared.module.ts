import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { PIPES } from "./pipes";
import { DataService } from "./services/data.service";
import { OptionComponent } from './components/menu/option/option.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AppService } from "../app.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    providers: [DataService, AppService]
})
export class SharedModule {

}
