import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent} from "./components/core/core.component";
import { NavigatorComponent } from "./components/navigator/navigator.component";
import { HeaderComponent } from "./components/header/header.component";
import { NoContentComponent } from "../no-content/no-content.component";
import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { PIPES } from "./pipes";
import { DataService } from "./services/data.service";
import { MenuComponent } from './components/menu/menu.component';
import { NewestComponent } from './components/newest/newest.component';
import { OptionComponent } from './components/menu/option/option.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    providers: [DataService]
})
export class SharedModule {

}
