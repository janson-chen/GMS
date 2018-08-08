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
import { UserService } from "./shared/services/user.service";
import { Router } from "@angular/router";

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppService implements HttpInterceptor {
  isLogged: boolean = false;
  constructor(
    private toastService: ToastrService,
    private userService: UserService,
    private router: Router
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
        if (!document.cookie.includes("Identity.Application")) {
          localStorage.clear();
          this.router.navigate(["/login"]);
        }
        return false;
      })
    )

  }
}
