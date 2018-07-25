import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter, tap } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppService implements HttpInterceptor {
  isLogged: boolean = false;
  constructor(
    private toastService: ToastrService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log(`Request for ${req}`);
        }
      }, error => {
        console.log('NICE ERROR', error);
        this.toastService.error(error.error);
        if (error.status === 400) {
          console.log(error.error[0]);
        }

        return false;
      })
    )

  }
}
