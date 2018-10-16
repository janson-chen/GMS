import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { Party } from "../party.data";
import { PartyService } from "../party.service";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BasicSetting } from "../external-manager.data";
import { ExternalManagerService } from "../external-manager.service";
import { CustomValidators } from "../../../shared/utils/custom-validators";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: "gm-basic-settings-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class BasicSettingsEditorComponent extends FormComponent<BasicSetting> implements OnInit {
  faCalendar = faCalendarPlus;

  constructor(
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              protected modalService: NgbModal,
              private externalService: ExternalManagerService
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      id: this.data.id,
      name: [this.data.name, CustomValidators.ModelTitle()],
      outSoftwarePath: [this.data.outSoftwarePath, Validators.required],
      filePath: [this.data.filePath, Validators.required],
      logPath: [this.data.logPath, Validators.required],
      fileMaxSize: [this.data.fileMaxSize, Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      const payload = {
        id: this.data.id,
        name: this.formGroup.value.name,
        outSoftwarePath: this.formGroup.value.outSoftwarePath,
        filePath: this.formGroup.value.filePath,
        logPath: this.formGroup.value.logPath,
        fileMaxSize: this.formGroup.value.fileMaxSize
      };

      try {
        await this.externalService.updateBasicSetting(this.data.id, payload);
        this.isSubmitted = true;
        setTimeout(() => this.close("修改成功."), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        this.isSubmitting = false;
        this.spinnerState = "failed";
      }
    }
  }
}

