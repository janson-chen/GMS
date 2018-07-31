import { ErrorHandler, Host, Injectable, Injector } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  toastService: ToastrService;
  constructor(
    private injector: Injector
  ) {

  }

  handleError(error: Error) {
    /*const notificationService = this.injector.get(NotificationService);
    const router = this.injector.get(Router);
    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        return notificationService.notify('No Internet Connection');
      } else {
        // Handle Http Error (error.status === 403, 404...)
        return notificationService.notify(`${error.status} - ${error.message}`);
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      router.navigate(['/error'], { queryParams: {error: error} });
    }*/
    // Log the error anyway
    console.error(error);
    this.toastService = <ToastrService>this.injector.get(ToastrService);

    this.toastService.error(error.message, "Error massage");
  }
}
