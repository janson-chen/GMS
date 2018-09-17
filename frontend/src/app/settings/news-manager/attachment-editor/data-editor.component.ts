import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faCalendarPlus, faUpload } from "@fortawesome/free-solid-svg-icons";

import { Risk } from "../risk.data";
import { News } from "../news.data";
import { NewsService } from "../news.service";
import { FormComponent } from "../../../shared/components/core/form-component";

@Component({
  selector: "gm-news-attachment-editor",
  templateUrl: "./attachment-editor.component.html",
  styleUrls: ["./attachment-editor.component.scss"]
})
export class NewsAttachmentEditorComponent extends FormComponent<News> implements OnInit {
  faUpload = faUpload;
  faCalendar = faCalendarPlus;
  successMessage: string = "";
  uploadFile: any;

  constructor(
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private newsService: NewsService
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
      await this.newsService.uploadAttachment(this.data.id, formData);
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

