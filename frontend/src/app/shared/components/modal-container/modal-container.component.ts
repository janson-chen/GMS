import { AfterContentInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from "../core/core.component";
import { FormComponent } from "../core/form-component";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'gm-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent extends CoreComponent<any> implements AfterContentInit {
  @Input() dismiss: (reason: any) => void;
  @Input() title: string = "";
  @Input() showClose: boolean = true;
  @Input() showTitle: boolean = true;
  @Input() showDescription: boolean = true;
  @ContentChild(FormComponent) formContent: FormComponent<any>;

  private formSubmitting: Subscription;
  private formSubmitted: Subscription;
  private formSubmitError: Subscription;

  constructor(protected modalService: NgbModal) {
    super();
  }

  private modalContainerOptions: NgbModalOptions = {
    centered: true,
    size: "lg",
    windowClass: "ngb-modal"
  };

  ngAfterContentInit() {
    if (this.formContent) {
      this.formSubmitting = this.formContent.submitting.subscribe(submitting => this.showClose = this.showTitle = this.showDescription = !submitting);
      this.formSubmitted = this.formContent.submitted.subscribe(data => this.showClose = true);
      this.formSubmitError = this.formContent.submitError.subscribe(error => this.showClose = true);
    }
  }

  openModal(templateRef: TemplateRef<any>): void {
    this.modalService.open(templateRef, this.modalContainerOptions);
  }

}
