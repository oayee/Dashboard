import {Injectable} from '@angular/core';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {DashResource} from '../core/dash-resource';
import {Http, RequestMethod} from '@angular/http';
import {Procedure} from '../core/interfaces/Procedure';

@Injectable()
@ResourceParams({pathPrefix: 'procedures'})
export class ProceduresService extends DashResource {

  @ResourceAction({method: RequestMethod.Get, isArray: true})
  getProcedures: ResourceMethod<void, Procedure[]>;

  @ResourceAction({path: '/{!id}', method: RequestMethod.Delete})
  delete: ResourceMethod<{id: any}, any>;

  @ResourceAction({method: RequestMethod.Post})
  create: ResourceMethod<{name: string}, any>;

  @ResourceAction({method: RequestMethod.Put})
  update: ResourceMethod<{_id: any, name: string}, any>;

}
