import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2 } from "@angular/core";

@Directive({
    selector: "[caTextEllipsis]"
})
export class TextEllipsisDirective implements OnChanges, AfterViewInit {
    @Input() caTextEllipsis: string;
    @Input() ellipsisChar: string = "...";
    @Input() eraseLinebreak: boolean = true;
    @Input() breakWord: boolean = true;

    private singleWordReg = /[\u2E80-\u9FFF]+/ig;
    private element: HTMLElement;

    constructor(private container: ElementRef, private renderer: Renderer2) {
        this.element = this.container.nativeElement;
        this.renderer.setStyle(this.element, "overflow", "hidden");
        this.renderer.setStyle(this.element, "white-space", "normal");
    }

    ngOnChanges(): void {
        this.clipText();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.clipText();
        });
    }

    private clipText(): void {
        let splitKey: string;
        let rawContent = this.caTextEllipsis || "";

        if (this.eraseLinebreak) {
            rawContent = rawContent.replace(/\n/g, "");
        }

        if (this.breakWord && !this.singleWordReg.test(this.caTextEllipsis)) {
            this.renderer.setStyle(this.element, "word-break", "break-word");
            splitKey = " ";
        } else {
            this.renderer.setStyle(this.element, "word-break", "break-all");
            splitKey = "";
        }

        this.element.innerText = rawContent;

        const checkOverflow = (): boolean => {
            return this.element.scrollHeight - this.element.offsetHeight > 0;
        }

        const loop = (start: number, mid: number, end: number): void => {
            mid = Math.ceil((start + end) / 2);
            text = textCopy.slice(0, mid);
            this.element.innerText = `${text.join(splitKey)}${this.ellipsisChar}`;
            if (end - start > 0) {
                if (checkOverflow()) {
                    preTry(start, mid, end);
                } else {
                    nextTry(start, mid, end);
                }
            }
        }

        const preTry = (start: number, mid: number, end: number): void => {
            end = mid - 1;
            loop(start, mid, end);
        }

        const nextTry = (start: number, mid: number, end: number): void => {
            start = mid;
            loop(start, mid, end);
        }

        let text = rawContent.split(splitKey),
            textCopy = rawContent.split(splitKey);
        let start = 0, end = text.length, mid = Math.ceil((start + end) / 2);

        if (checkOverflow()) {
            preTry(start, end, mid);
        }
    }
}
