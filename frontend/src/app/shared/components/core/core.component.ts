import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { QueryOption } from "./core.data";

@Component({
  selector: "gm-core",
  template: ""
})
export abstract class CoreComponent<T> {
  @Input() data: T;

  queryOptions: QueryOption = {
    page: 1,
    pageSize: 10,
    totalCount: 0
  };

  get queryUrl() {
    return `page=${this.queryOptions.page}/pageSize=${this.queryOptions.pageSize}`
  }

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
