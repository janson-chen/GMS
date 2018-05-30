import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./shared/components/core/user.service";

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppService implements HttpInterceptor {
    isLogged: boolean = false;

    constructor(private userService: UserService) {

    }

    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone(
            {   setHeaders: {
                    Authorization: this.userService.token
                }
            }
        );

        return next.handle(req).map(event => {
            if (event instanceof HttpResponse) {
                if (event.status === 401) {
                    // JWT expired, go to login
                }
            }
            return event;
        });
    }
}
