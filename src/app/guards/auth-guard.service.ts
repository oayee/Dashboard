import { Injectable }     from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from "../core/user-service/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
              private router:Router) {}

  loggedIn: boolean = false;

  canActivate(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    // this.userService.getUser().subscribe(user => {this.loggedIn = true; console.log('auth user: ', user)});
    console.log('auth uesr: ', this.userService.user);
    if (this.userService.user) {
      this.loggedIn = true;
    }
    if (this.loggedIn) {
      console.log('true');
      return true;
    }
    console.log('false');
    this.router.navigate(['/auth/login']);
    return false;
  }
}
