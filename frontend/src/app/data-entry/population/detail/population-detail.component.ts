import { Component, Input, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { Member, Population, POPULATION_FAMILY_MANAGER_TABLE_COLUMES } from "../population.data";
import { PopulationService } from "../population.service";
import { CommunityService } from "../../../settings/community-manager/community.service";
import { faEdit, faTrash, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from "@angular/router";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../../../settings/community-manager/community.data";
import { UserService } from "../../../shared/services/user.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DictionaryManagerService } from "../../../settings/dictionary-manager/dictionary-manager.service";
import { Dictionary } from "../../../settings/dictionary-manager/dicitonary-manager.data";

@Component({
  selector: 'gm-detail-table',
  templateUrl: './population-detail.component.html',
  styleUrls: ['./population-detail.component.scss']
})
export class PopulationDetailComponent extends ModalContainerComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faCalendar = faCalendar;
  families: Member[] = [];
  communities: Community[] = [];
  columns = POPULATION_FAMILY_MANAGER_TABLE_COLUMES;
  currentEditMember: any;
  relations: Dictionary[] = [];
  peopleTypes: Dictionary[] = [];
  cultures: Dictionary[] = [];
  maritalStates: Dictionary[] = [];

  constructor(
    private populationService: PopulationService,
    private communityService: CommunityService,
    private route: ActivatedRoute,
    protected modalService: NgbModal,
    protected userService: UserService,
    protected fb: FormBuilder,
    protected toastrService: ToastrService,
    protected dictionaryManagerService: DictionaryManagerService
  ) {
    super();
    route.data.subscribe((data: { detail: Population, families: {detail: Member[]}, communities: Community[] }) => {
      this.data = data.detail;
      this.families = data.families.detail;
      this.communities = data.communities;
      this.communityService.saveCommunities(this.communities);
    });
  }

  async ngOnInit(): Promise<void> {
    // get relation from dictionary  dictionaryId = 13
    const result1 = await this.dictionaryManagerService.getList(`/dictionarydetaillist/dictionaryId=13/page=-1/pagesize=-1`);
    this.relations = result1.detail;
    const result2 = await this.dictionaryManagerService.getList(`/dictionarydetaillist/dictionaryId=4/page=-1/pagesize=-1`);
    this.peopleTypes = result2.detail;
    const result3 = await this.dictionaryManagerService.getList(`/dictionarydetaillist/dictionaryId=5/page=-1/pagesize=-1`);
    this.cultures = result3.detail;
    const result4 = await this.dictionaryManagerService.getList(`/dictionarydetaillist/dictionaryId=6/page=-1/pagesize=-1`);
    this.maritalStates = result4.detail;
  }

  getCommunityNameById(id: string): string {
    return this.communityService.communitiesMap[id];
  }

  async removeMember(id: string): Promise<void> {
    await this.populationService.deleteMembers([id]);
    void this.updateMembers();
  }

  async submit(): Promise<void> {

  }

  async updateMembers(): Promise<void> {
    const result = await this.populationService.getById("", `/families/populationid=${this.data.id}/page=-1/pagesize=-1`);
    this.families = result && result.detail;
  }

  async updatePopulation(): Promise<void> {
    const result = await this.populationService.getById(this.data.id, "/id=");
    this.data = result;
  }

}
