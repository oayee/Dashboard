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

  @ResourceAction({method: RequestMethod.Delete})
  delete: ResourceMethod<{id: string}, any>;

  @ResourceAction({method: RequestMethod.Post})
  create: ResourceMethod<{name: string}, any>;

  @ResourceAction({path: '/{!id}', method: RequestMethod.Put})
  update: ResourceMethod<{id: string, name: string}, any>;

}
