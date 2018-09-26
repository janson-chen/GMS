import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { faEdit, faTrash, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { CoreComponent } from "../core/core.component";
import { UserService } from "../../../shared/services/user.service";
import { DictionaryManagerService } from "../dictionary-manager.service";
import { Dictionary, DICTIONARY_DETAIL_MANAGER_TABLE_COLUMES } from "../dicitonary-manager.data";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";

@Component({
  selector: 'gm-dictionary-detail-table',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent extends ModalContainerComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faCalendar = faCalendar;
  columns = DICTIONARY_DETAIL_MANAGER_TABLE_COLUMES;

  constructor(
    private route: ActivatedRoute,
    protected modalService: NgbModal,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastrService: ToastrService,
    private dictionaryManagerService: DictionaryManagerService
  ) {
    super();
    route.data.subscribe((data:  { dictionaries: {detail: Dictionary[]} }) => {
      this.data = data.dictionaries.detail;
    });
  }

  ngOnInit() {
  }

  async removeDictionaryDetail(id: string): Promise<void> {
    await this.dictionaryManagerService.removeDictionaryDetails([id]);
    void this.updateDictionaryDetail();
  }

  async submit(): Promise<void> {

  }

  async updateDictionaryList(): Promise<void> {
    const result = await this.dictionaryManagerService.getById(this.data.id, `/dictionarydetaillist`);
    this.data = result && result.detail;
  }

  async updateDictionaryDetail(): Promise<void> {
    setTimeout(async () => {
      const result = await this.dictionaryManagerService.getById("", `/dictionarydetaillist/dictionaryid=${this.data[0].dictionaryId}/page=-1/pagesize=-1`);
      this.data = result.detail;
    }, 1000);
  }
}
