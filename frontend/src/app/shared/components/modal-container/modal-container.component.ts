import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { FormComponent } from "../core/form-component";
import { Subscription } from "rxjs";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'gm-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent extends TableComponent<any> implements AfterContentInit {
  @Input() dismiss: (reason: any) => void;
  @Input() title: string = "";
  @Input() showClose: boolean = true;
  @Input() showTitle: boolean = true;
  @Input() showDescription: boolean = true;
  @ContentChild(FormComponent) formContent: FormComponent<any>;

  private formSubmitting: Subscription;
  private formSubmitted: Subscription;
  private formSubmitError: Subscription;

  ngAfterContentInit() {
    if (this.formContent) {
      this.formSubmitting = this.formContent.submitting.subscribe(submitting => this.showClose = this.showTitle = this.showDescription = !submitting);
      this.formSubmitted = this.formContent.submitted.subscribe(data => this.showClose = true);
      this.formSubmitError = this.formContent.submitError.subscribe(error => this.showClose = true);
    }
  }

}
