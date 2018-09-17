import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { Party } from "../party.data";
import { PartyService } from "../party.service";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BasicSetting } from "../external-manager.data";
import { ExternalManagerService } from "../external-manager.service";

@Component({
  selector: "gm-external-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class ExternalEditorComponent extends FormComponent<BasicSetting> implements OnInit {
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
      name: this.data.name,
      outSoftwarePath: this.data.outSoftwarePath,
      filePath: this.data.filePath,
      logPath: this.data.logPath,
      fileMaxSize: this.data.fileMaxSize
    });
  }

  async submit() {
    this.isSubmitting = true;
    const payload = [
      { "op" : "replace", "path" : "/OutSoftwarePath", "value" : this.formGroup.value.outSoftwarePath },
      { "op" : "replace", "path" : "/FileMaxSize", "value" : this.formGroup.value.fileMaxSize },
      { "op" : "replace", "path" : "/FilePath", "value" : this.formGroup.value.filePath },
      { "op" : "replace", "path" : "/LogPath", "value" : this.formGroup.value.logPath }
    ];

    try {
      await this.externalService.updateExternalSetting(this.data.id, payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("修改成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }


}

