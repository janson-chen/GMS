import { Component, Input, OnDestroy, Renderer2, ElementRef } from "@angular/core";

import { maskLayer } from "../../utils/mask-layer";

@Component({
    selector: "ca-spinner",
    templateUrl: "./spinner.component.html",
    styleUrls: ["./spinner.component.scss"]
})
export class SpinnerComponent implements OnDestroy {
    @Input() dotColor: string = "white";
    mask: HTMLDivElement = maskLayer;

    private state_: SpinnerState = "waiting";
    private theme_ = "orbit";

    @Input()
    set theme(value: string) {
        this.renderer.removeClass(this.elementRef.nativeElement, this.theme_);
        this.renderer.addClass(this.elementRef.nativeElement, value);
        this.theme_ = value;
    }
    get theme(): string {
        return this.theme_;
    }

    @Input() set state(value: SpinnerState) {
        this.state_ = value;

        if (this.theme_ !== "translate") {
            this.alterMask(value);
        }
    }
    get state(): SpinnerState {
        return this.state_;
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.elementRef.nativeElement, this.theme_);
    }

    ngOnDestroy(): void {
        this.renderer.removeChild(document.body, this.mask);
    }

    private alterMask(state: SpinnerState): void {
        if (state === "waiting") {
            this.renderer.appendChild(document.body, this.mask);
        } else {
            this.renderer.removeChild(document.body, this.mask);
        }
    }
}

export type SpinnerState = "waiting" | "success" | "failed" | "hidden";
