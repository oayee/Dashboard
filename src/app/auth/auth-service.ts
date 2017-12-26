import {Injectable} from '@angular/core';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {RequestMethod} from '@angular/http';
import {DashResource} from '../core/dash-resource';
import {User} from '../core/user-service/User';

@Injectable()
@ResourceParams({pathPrefix: 'profiles'})
export class AuthService extends DashResource{

  @ResourceAction({path: '/register', method: RequestMethod.Post})
  register: ResourceMethod<User, any>;

  @ResourceAction({method: RequestMethod.Post})
  login: ResourceMethod<{login: string, password: string}, any>;

  @ResourceAction()
  getUser: ResourceMethod<void, User>;
}
