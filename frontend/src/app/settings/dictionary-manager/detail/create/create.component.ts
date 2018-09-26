import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

import { Party } from "../party.data";
import { PartyService } from "../party.service";
import { Dictionary } from "../../dicitonary-manager.data";
import { DictionaryManagerService } from "../../dictionary-manager.service";
import { UserService } from "../../../../shared/services/user.service";
import { FormComponent } from "../../../../shared/components/core/form-component";

@Component({
  selector: "gm-dictionary-detail-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class DictionaryDetailCreateComponent extends FormComponent<Dictionary> implements OnInit {
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
      dictionaryId: this.data[0].dictionaryId || "",
      value: ""
    });
  }

  async submit() {
    this.isSubmitting = true;
    const payload =
      [
        {
          dictionaryId: this.formGroup.value.dictionaryId,
          value: this.formGroup.value.value
        }
      ];

    try {
      await this.dictionaryManagerService.createDictionaryDetail(payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("创建成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }
}

