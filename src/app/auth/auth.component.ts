import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';
import {Roles, User} from '../core/user-service/User';
import {AuthService} from './auth-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  public user: User = new User();
  public password: string;
  public roles: typeof Roles = Roles;
  register: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.register = params['action'] == 'register');
  }

  loginUser() {
    this.authService.login({login: this.user.nickname, password: this.password}).$observable.subscribe(user => {
      this.userService.setUser(user);
      localStorage.setItem('access_token', user.access_token);
      this.router.navigate(['/']);
    }, err => {console.log('unauthorized')});
  }

  public registerUser() {
    console.log('register1');
    let login = Object.assign(this.user, {password: this.password});
    this.authService.register(this.user).$observable.subscribe(data => { console.log('returned');
      this.userService.setUser(this.user);
      localStorage.setItem('access_token', data.access_token);
      this.router.navigate(['/']);
    });
  }
}
