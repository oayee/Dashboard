import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {User} from './User';

@Injectable()
export class UserService {
  public user: User;
  public onLogin = new Subject<User>();
  public errorAuth: boolean = false;

  public setUser(user: User) {
    this.errorAuth = false;
    this.user = user;
    console.log('User: ', this.user);
    this.onLogin.next(user);
  }

  public noAuthUser(err: number) {
    this.errorAuth = true;
    this.onLogin.error(err);
  }

  public getUser(): Observable<User> {
    if (this.errorAuth) {
      return of(this.user);
    }
    return this.user ? of(this.user) : this.onLogin.pipe(catchError(error => of(null)))
  }

  public logout() {
    delete this.user;
    localStorage.removeItem('access_token');
  }
}
