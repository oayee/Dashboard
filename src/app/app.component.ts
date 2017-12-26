import {Component, OnInit} from '@angular/core';
import {UserService} from './core/user-service/user.service';
import {AuthService} from './auth/auth-service';
import {User} from "./core/user-service/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(public userService: UserService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().$observable.subscribe(
      (user: User) => {
        if (!user)
          console.log('not user reutrned');
        else {
          console.log('returened user: ', user.nickname);
          this.userService.setUser(user);
        }
      },
      error => this.userService.noAuthUser(error)
    );
  }

  logout():void {
    this.userService.logout();
  }

}
