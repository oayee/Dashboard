import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';
import {Roles, User} from '../core/user-service/User';
import {AuthService} from './auth-service';
import {MatDialog} from '@angular/material';
import {RegisterUserDialogComponent} from './register-user-dialog/register-user-dialog.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  public user: User = new User();
  public password: string;
  public roles: typeof Roles = Roles;

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService,
              public dialog: MatDialog) {}

  loginUser() {
    this.authService.login({login: this.user.nickname, password: this.password}).$observable.subscribe(user => {
      this.userService.setUser(user);
      localStorage.setItem('access_token', user.access_token);
      this.router.navigate(['/']);
    }, err => {console.log('unauthorized')});
  }

  public registerUser() {
    this.dialog.open(RegisterUserDialogComponent, {
      width: '500px',
      height: 'auto'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.user.name = result.name;
        this.user.surname = result.surname;
        this.user.lastname = result.lastname;
        this.user.nickname = result.nickname;
        this.user.password = result.password;
        console.log('User: ', this.user);
        this.authService.register(this.user).$observable.subscribe(data => {
          this.userService.setUser(this.user);
          localStorage.setItem('access_token', data.access_token);
          this.router.navigate(['/']);
        });
      }
    });
    // let login = Object.assign(this.user, {password: this.password});
  }
}
