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
import { CookieService } from "ngx-cookie-service";

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppService implements HttpInterceptor {
  isLogged: boolean = false;
  constructor(
    private toastService: ToastrService,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log("cookie", event.headers);

        }
      }, error => {
        console.log('NICE ERROR', error.status == "401");
        if (error.status == "401") {
          localStorage.clear();
          this.router.navigate(["/login"]);
        }
      })
    )

  }
}
