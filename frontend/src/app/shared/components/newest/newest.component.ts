import { Component, ElementRef, forwardRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NewsService } from "../../../settings/news-manager/news.service";

@Component({
    selector: 'gm-newest',
    templateUrl: './newest.component.html',
    styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit {
    @Input() fileId: string = "";
    @ViewChild("banner") banner: ElementRef;

    constructor(
      @Inject(forwardRef(() => NewsService)) private newsService: NewsService,
      private render: Renderer2,
      private el: ElementRef
    ) { }

    async ngOnInit(): Promise<void> {
      if (this.fileId) {
        const result = await this.newsService.getNewsAttachment(this.fileId);
        const img = this.render.createElement("img");
        const urlCreator = window.URL || window['webkitURL'];
        const imageUrl = urlCreator.createObjectURL(result);
        img.src = imageUrl;
        this.banner.nativeElement.appendChild(img);
      }
    }
}
