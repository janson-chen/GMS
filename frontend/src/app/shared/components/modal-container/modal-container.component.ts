import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gm-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @Input() dismiss: (reason: any) => void;
  @Input() title: string = "";

  constructor(protected modalService: NgbModal) {

  }

  private modalContainerOptions: NgbModalOptions = {
    centered: true,
    size: "lg",
    windowClass: "ngb-modal"
  };

  ngOnInit() {

  }

  openModal(templateRef: TemplateRef<any>): void {
    this.modalService.open(templateRef, this.modalContainerOptions);
  }

}
