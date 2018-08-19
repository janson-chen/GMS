import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
import { UserService } from "./shared/services/user.service";
import { Router } from "@angular/router";

@Injectable()
export class AppService implements HttpInterceptor {
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
          console.log("cookie", event.headers);

        }
      }, error => {
        if (error.status == "401") {
          localStorage.clear();
          this.router.navigate(["/login"]);
        }
      })
    )
  }
}
