import {Injectable} from '@angular/core';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {DashResource} from '../core/dash-resource';
import {RequestMethod} from '@angular/http';
import {User} from '../core/user-service/User';

@Injectable()
@ResourceParams({pathPrefix: 'profiles/users'})
export class UsersService extends DashResource {

  @ResourceAction({method: RequestMethod.Get, isArray: true})
  getUsers: ResourceMethod<void, User[]>;

}
