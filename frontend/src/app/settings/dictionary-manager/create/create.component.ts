import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { Party } from "../party.data";
import { PartyService } from "../party.service";
import { Dictionary } from "../dicitonary-manager.data";
import { UserService } from "../../../shared/services/user.service";
import { DictionaryManagerService } from "../dictionary-manager.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { CustomValidators } from "../../../shared/utils/custom-validators";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: "gm-dictionary-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class DictionaryCreateComponent extends FormComponent<Dictionary> implements OnInit {
  faCalendar = faCalendarPlus;

  constructor(
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              protected modalService: NgbModal,
              private dictionaryManagerService: DictionaryManagerService
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      code: ["", Validators.required],
      text: ["", Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      const payload =
        {
          code: this.formGroup.value.code,
          text: this.formGroup.value.text
        };

      try {
        await this.dictionaryManagerService.createDictionary(payload);
        this.isSubmitted = true;
        setTimeout(() => this.close("创建成功."), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        this.isSubmitted = true;
        this.spinnerState = "failed";
      }
    }
  }
}

