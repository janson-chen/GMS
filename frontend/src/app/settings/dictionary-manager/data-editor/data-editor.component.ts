import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { Party } from "../party.data";
import { PartyService } from "../party.service";
import { Dictionary } from "../dicitonary-manager.data";
import { UserService } from "../../../shared/services/user.service";
import { DictionaryManagerService } from "../dictionary-manager.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: "gm-dictionary-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"]
})
export class DictionaryEditorComponent extends FormComponent<Dictionary> implements OnInit {
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
      id: this.data.id || "",
      dictionaryId: this.data.dictionaryId || "",
      value: this.data.value || ""
    });
    this.data = await this.dictionaryManagerService.getById("", `/dictionarydetail/id=${this.data.id}`);
    this.formGroup.get("dictionaryId").setValue(this.data.dictionaryId);
    this.formGroup.get("value").setValue(this.data.value);
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      const payload = [
        {
          id: this.data.id,
          dictionaryId: this.formGroup.value.dictionaryId,
          value: this.formGroup.value.value
        }
      ];

      try {
        await this.dictionaryManagerService.updateDictionary(this.data.id, payload);
        this.isSubmitted = true;
        setTimeout(() => this.close("修改成功."), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        this.isSubmitting = false;
        this.spinnerState = "failed";
      }
    }
  }
}

