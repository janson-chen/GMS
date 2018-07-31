import { Component, Host, Input, OnDestroy, OnInit, Optional, SkipSelf } from "@angular/core";
import { ControlContainer, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormControlBase } from "../../models/form-control-base";
import { BaseFormControl } from "../core/base-form-control";

@Component({
    selector: "ca-input-radio",
    template: `
        <div class="radio" (click)="checked=true">
            <svg width="16" height="16" [style.opacity]="checked?1:0">
                <circle cx="8" cy="8" r="5"></circle>
            </svg>
        </div>
        <label (click)="checked=true">
            <ng-content></ng-content>
        </label>
    `,
    styleUrls: ["input-radio.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputRadioComponent,
            multi: true
        }
    ]
})
export class InputRadioComponent extends BaseFormControl<string> implements OnInit, OnDestroy {
    @Input() value = "";

    private checked_ = false;
    get checked(): boolean {
        return this.checked_;
    }

    constructor(
        @Host()
        @Optional()
        @SkipSelf()
        controlContainer: ControlContainer
    ) {
        super(controlContainer);
        this.triggerChangeItself = true;
    }

    @Input()
    set checked(value: boolean) {
        this.checked_ = value;
        if (value) {
            this.propagateChange(this.value);
        }
    }

    writeValue(value: string): void {
        this.checked_ = value === this.value;
    }
}
