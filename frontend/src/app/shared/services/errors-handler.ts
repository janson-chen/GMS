import { ErrorHandler, Host, Injectable, Injector } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  toastService: ToastrService;

  constructor(
    private injector: Injector,
    // private router: Router
  ) {

  }

  handleError(error: Error) {
    console.error(error);
    this.toastService = <ToastrService>this.injector.get(ToastrService);

    this.toastService.error(error.message, "Error massage");
  }
}
