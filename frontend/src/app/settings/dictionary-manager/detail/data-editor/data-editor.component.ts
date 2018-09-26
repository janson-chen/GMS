import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faEdit, faTrash, faCalendar, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

import { Member } from "../../population.data";
import { Dictionary } from "../../dicitonary-manager.data";
import { PopulationService } from "../../population.service";
import { UserService } from "../../../../shared/services/user.service";
import { FormComponent } from "../../../../shared/components/core/form-component";
import { POPULATION_TABLE_COLUMES } from "../../../shared/components/core/core.data";
import { DictionaryManagerService } from "../../dictionary-manager.service";

@Component({
  selector: "gm-dictionary-detail-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"],
  providers: [FormComponent.provide(DictionaryDetailEditorComponent)]
})
export class DictionaryDetailEditorComponent extends FormComponent<Dictionary> implements OnInit {
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
      dictionaryId: this.data.dictionaryId,
      value: this.data.value
    })
    ;
  }

  async submit() {
    this.isSubmitting = true;
    const payload: Dictionary[] = [{
      dictionaryId: this.formGroup.value.dictionaryId,
      value: this.formGroup.value.value
    }];

    try {
      await this.dictionaryManagerService.createDictionaryDetail(payload);
      this.isSubmitted = true;
      setTimeout(() => this.close("字典信息修改成功."), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }
}

