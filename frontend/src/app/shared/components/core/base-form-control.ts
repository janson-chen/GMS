import { Input, OnDestroy, OnInit } from "@angular/core";
import { ControlContainer, ControlValueAccessor } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

export abstract class BaseFormControl<T>  implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() name = "";
  @Input() formControlName = "";
  @Input() disabled = false;
  protected triggerChangeItself = false;
  protected propagateChange = (newValue: T): void => {};
  private changeSubscription: Subscription;

  constructor(protected controlContainer: ControlContainer = null) {
  }

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      const control = this.controlContainer.control.get(this.formControlName.toString());

      if (control) {
        if (this.triggerChangeItself) {
          this.changeSubscription = control.valueChanges.subscribe(newValue => {
            this.writeValue(newValue);
          });
        }
      } else {
        throw `FormControl is not found, please make sure [${this.formControlName}] is the right name.`;
      }
    }
  }

  abstract writeValue(value: T): void;

  ngOnDestroy(): void {
    if (this.changeSubscription) {
      this.changeSubscription.unsubscribe();
    }
  }

  registerOnChange(changeAction: (newValue: any) => void): void {
    this.propagateChange = changeAction;
  }

  registerOnTouched(touchAction: () => void): void {}
}
