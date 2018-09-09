import { Component, OnInit } from '@angular/core';
import { Community, COMMUNITY_TABLE_COLUMES } from "./community.data";
import { ModalContainerComponent } from "../../shared/components/modal-container/modal-container.component";
import { CommunityService } from "./community.service";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../shared/services/user.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'gm-community-manager',
  templateUrl: './community-manager.component.html',
  styleUrls: ['./community-manager.component.scss']
})
export class CommunityManagerComponent extends ModalContainerComponent implements OnInit {
  columns = COMMUNITY_TABLE_COLUMES;
  communities: Community[] = [];

  constructor(
              private communityService: CommunityService,
              private route: ActivatedRoute,
              protected userService: UserService,
              protected fb: FormBuilder,
              protected toastService: ToastrService,
              protected modalService: NgbModal
  ) {
    super();

    route.data.subscribe((data: { communities: Community[] }) => {
      this.communities = data["0"];
      this.communityService.saveCommunities(this.communities);
      console.log("communities", this.communityService.communitiesMap);
    });
  }

  ngOnInit() {
  }

}
