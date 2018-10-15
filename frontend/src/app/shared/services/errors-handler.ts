import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  toastService: ToastrService;

  constructor(
    private injector: Injector
  ) {

  }

  handleError(error: Error) {
    console.error("error message: ", error);
    this.toastService = <ToastrService>this.injector.get(ToastrService);

    // this.toastService.error(error['rejection']['error'][0], "Error massage");
  }
}
