import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "gm-core",
  template: ""
})
export abstract class CoreComponent<T> {
  @Input() data: T;
  protected modalService?: NgbModal;

  protected modalContainerOptions: NgbModalOptions = {
    centered: true,
    size: "lg",
    windowClass: "ngb-modal"
  };

  openModal(templateRef: TemplateRef<any>): void {
    this.modalService.open(templateRef, this.modalContainerOptions);
  }
}
