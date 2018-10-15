import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { UserService } from "../../../shared/services/user.service";
import { FormComponent } from "../../../shared/components/core/form-component";
import { NewsService } from "../news.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomValidators } from "../../../shared/utils/custom-validators";
import { isValidForm } from "../../../shared/utils/form-validator";

@Component({
  selector: 'gm-news-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [FormComponent.provide(CreateNewsComponent)]
})
export class CreateNewsComponent<News> extends FormComponent<News> implements OnInit {
  @Input() news: News[] = [];

  constructor(protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              private newsService: NewsService,
              protected modalService: NgbModal
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group({
      title: ["", CustomValidators.ModelTitle()],
    });
  }

  async submit(): Promise<void> {
    if (isValidForm(this.formGroup)) {
      this.isSubmitting = true;

      try {
        const payload = {
          title: this.formGroup.value.title
        };

        await this.newsService.addNews(payload);
        this.isSubmitted = true;
        setTimeout(() => this.close("新闻创建成功."), this.successMessageTimeoutInSeconds * 1000);
      } catch (e) {
        this.isSubmitted = true;
      }
    }
  }
}
