import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(state.url);
    if (this.userService.isLoggedIn) {
      if (state.url === "/login" || state.url === "") {
         this.router.navigate(["/"]);
      }
      return true;
    } else {
      if (state.url !== "/login") {
        this.router.navigate(["/login"]);
      }
    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

}
