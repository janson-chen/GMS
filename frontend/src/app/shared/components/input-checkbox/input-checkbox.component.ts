import { Component, Host, Input, Optional, SkipSelf } from "@angular/core";
import { ControlContainer, NG_VALUE_ACCESSOR } from "@angular/forms";

import { FormControlBase } from "../../models/form-control-base";
import { BaseFormControl } from "../core/base-form-control";

@Component({
    selector: "ca-input-checkbox",
    templateUrl: "./input-checkbox.component.html",
    styleUrls: ["./input-checkbox.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputCheckboxComponent,
            multi: true
        }
    ]
})
export class InputCheckboxComponent extends BaseFormControl<boolean> {
    @Input() value: string = "";
    @Input() size: number = 16;
    @Input() borderRadius = 0;
    themeClass: {};

    private checked_: boolean;

    get checked(): boolean {
        return this.checked_;
    }

    @Input()
    set checked(value: boolean) {
        this.checked_ = value || false;
        this.propagateChange(value);
    }

    private theme_: CheckboxTheme = "tick";

    get theme(): CheckboxTheme {
        return this.theme_;
    }

    @Input()
    set theme(value: CheckboxTheme) {
        this.theme_ = value;
        this.themeClass = {
            tick: this.theme_ === "tick",
            rect: this.theme_ === "rect"
        };
    }

    constructor(
        @Host()
        @Optional()
        @SkipSelf()
        controlContainer: ControlContainer
    ) {
        super(controlContainer);
    }

    writeValue(value: boolean): void {
        this.checked_ = value || false;
    }

    alterValue(event: MouseEvent | TouchEvent): void {
        const target = <HTMLElement>event.target;
        if (target.tagName === "BUTTON" || target.tagName === "A") {
            event.stopPropagation();
        } else {
            this.checked = !this.checked;
        }
    }
}

type CheckboxTheme = "tick" | "rect";
