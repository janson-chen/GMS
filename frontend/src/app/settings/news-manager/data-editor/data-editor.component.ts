import { Component, Input, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { FormComponent } from "../../../shared/components/core/form-component";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { News } from "../news.data";
import { NewsService } from "../news.service";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: "gm-news-editor",
  templateUrl: "./data-editor.component.html",
  styleUrls: ["./data-editor.component.scss"],
  providers: [FormComponent.provide(NewsDataEditorComponent)]
})
export class NewsDataEditorComponent extends FormComponent<News> implements OnInit {
  @Input() news: News[] = [];

  faCalendar = faCalendarPlus;
  successMessage: string = "";

  constructor(
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastService: ToastrService,
    protected modalService: NgbModal,
    private newsService: NewsService
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      title: [this.data && this.data.title || "", Validators.required]
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;
      let payload = {
        id: this.data.id,
        title: this.formGroup.value.title
      };

      try {
        payload['id'] = this.data.id;
        await this.newsService.updateNews(this.data.id, payload);
        this.successMessage = "保存成功";
      } catch (e) {
        this.isSubmitting = false;
        this.spinnerState = "failed";
      } finally {

      }
    }

    this.isSubmitted = true;
    setTimeout(() => this.close(this.successMessage), this.successMessageTimeoutInSeconds * 1000);
  }
}

