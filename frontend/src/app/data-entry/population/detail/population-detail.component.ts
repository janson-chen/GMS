import { Component, OnInit } from '@angular/core';
import { CoreComponent } from "../core/core.component";
import { Member, Population, POPULATION_FAMILY_MANAGER_TABLE_COLUMES } from "../population.data";
import { PopulationService } from "../population.service";
import { CommunityService } from "../../../settings/community-manager/community.service";
import { faEdit, faTrash, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from "@angular/router";
import { ModalContainerComponent } from "../../../shared/components/modal-container/modal-container.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Community } from "../../../settings/community-manager/community.data";

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

  constructor(
    private populationService: PopulationService,
    private communityService: CommunityService,
    private route: ActivatedRoute,
    protected modalService: NgbModal
  ) {
    super(modalService);
    route.data.subscribe((data: { detail: Population, families: {detail: Member[]}, communities: Community[] }) => {
      this.data = data.detail;
      this.families = data.families.detail;
      this.communities = data.communities;
      this.communityService.saveCommunities(this.communities);
    });
  }

  ngOnInit() {
    console.log("data", this.data);
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

  async updatePolation(): Promise<void> {
    this.data = await this.populationService.getById(this.data.id, "/id=");
  }

}
