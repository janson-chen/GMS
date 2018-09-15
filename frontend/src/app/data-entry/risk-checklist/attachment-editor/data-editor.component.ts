import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faCalendarPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import { RiskService } from "../risk.service";
import { Risk } from "../risk.data";

@Component({
  selector: "gm-attachment-editor",
  templateUrl: "./attachment-editor.component.html",
  styleUrls: ["./attachment-editor.component.scss"]
})
export class AttachmentEditorComponent extends FormComponent<Risk> implements OnInit {
  faUpload = faUpload;
  faCalendar = faCalendarPlus;
  successMessage: string = "";
  uploadFile: any;

  constructor(
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    private riskService: RiskService,
    protected modalService: NgbModal,
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      uploadFile: null
    });
  }

  async submitUpload(): Promise<void> {
    this.isSubmitting = true;
    const formData = new FormData();
    formData.append("file", this.uploadFile);

    try {
      await this.riskService.uploadAttachment(this.data.id, formData);
      this.isSubmitted = true;
      setTimeout(() => this.close("附件上传成功"), this.successMessageTimeoutInSeconds * 1000);
    } catch (e) {
      this.isSubmitting = false;
      this.spinnerState = "failed";
    }
  }

  catchFile(data): void {
    this.uploadFile = data.target.files[0];
  }
}

