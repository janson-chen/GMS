import { EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { SpinnerState } from "../../components/spinner/spinner.component";
import { CoreComponent } from "./core.component";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../../services/user.service";

export class FormComponent<UserInfo> extends CoreComponent<UserInfo> {
  @Input() close: (result: any) => void;
  @Output() submitting: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  successMessageTimeoutInSeconds: number = 3;
  formGroup: FormGroup;
  spinnerState: SpinnerState = "waiting";

  private isSubmitted_: boolean = false;
  private isSubmitting_: boolean = false;

  constructor(protected userService: UserService, protected fb: FormBuilder, protected toastService: ToastrService) {
    super();
  }

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
}
