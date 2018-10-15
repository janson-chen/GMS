import { EventEmitter, Input, Output, Provider, Type } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { SpinnerState } from "../../components/spinner/spinner.component";
import { CoreComponent } from "./core.component";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../services/user.service";

export class FormComponent<T> extends CoreComponent<T> {
  @Input() close: (result: any) => void;
  @Output() submitting: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitError: EventEmitter<any> = new EventEmitter<any>();

  protected fb: FormBuilder;
  protected userService: UserService;
  protected ToastrService: ToastrService;

  successMessageTimeoutInSeconds: number = 3;
  formGroup: FormGroup;
  spinnerState: SpinnerState = "waiting";
  titleLengthLimit: number = 100;

  private isSubmitted_: boolean = false;
  private isSubmitting_: boolean = false;

  get isSubmitting(): boolean {
    return this.isSubmitting_;
  }

  set isSubmitting(value: boolean) {
    this.isSubmitting_ = value;
    this.submitting.emit(value);
  }

  get isSubmitted(): boolean {
    return this.isSubmitted_;
  }

  set isSubmitted(value: boolean) {
    this.isSubmitted_ = value;
    this.submitted.emit(this.data);

    if (value) {
      this.spinnerState = "success";
    }
  }

  getControl(name: string) {
    return name && this.formGroup ? this.formGroup.get(name) : null;
  }

  static provide<TComponent extends FormComponent<any>>(type: Type<TComponent>): Provider {
    return { provide: FormComponent, useExisting: type, multi: true };
  }
}
