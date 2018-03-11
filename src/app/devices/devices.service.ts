import {Injectable} from '@angular/core';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {DashResource} from '../core/dash-resource';
import {RequestMethod} from '@angular/http';
import {IDevice} from '../core/interfaces/IDevice';

@Injectable()
@ResourceParams({pathPrefix: 'devices'})
export class DevicesService extends DashResource {

  @ResourceAction({method: RequestMethod.Get, isArray: true})
  getDevices: ResourceMethod<void, IDevice[]>;

  @ResourceAction({method: RequestMethod.Post})
  create: ResourceMethod<{entry:IDevice}, any>;

  @ResourceAction({method: RequestMethod.Put})
  update: ResourceMethod<{entry:IDevice}, any>;

  @ResourceAction({method: RequestMethod.Delete})
  delete: ResourceMethod<{id: string}, any>;
}
