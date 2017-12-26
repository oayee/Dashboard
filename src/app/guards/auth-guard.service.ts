import { Injectable }     from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from "../core/user-service/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService,
              private router:Router) {}

  canActivate(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    let a = !!this.userService.user;
    if (a) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
