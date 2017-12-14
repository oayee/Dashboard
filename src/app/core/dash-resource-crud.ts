import {ResourceAction, ResourceMethod} from 'ngx-resource';
import {Http, RequestMethod} from '@angular/http';
import {Injectable} from '@angular/core';
import {DashResource} from './dash-resource';

@Injectable()
export class DashResourceCrud<TQuery, TShort, TFull> extends DashResource {

  constructor(http: Http) {
    super(http);
  }

  @ResourceAction({ isArray: true })
  query: ResourceMethod<TQuery, TShort[]>;

  @ResourceAction({ path: '/{!id}' })
  get: ResourceMethod<{id: any}, TFull>;

  @ResourceAction({ method: RequestMethod.Post })
  save: ResourceMethod<TFull, TFull>;

  @ResourceAction({ method: RequestMethod.Put, path: '/{!_id}' })
  update: ResourceMethod<TFull, TFull>;

  @ResourceAction({ method: RequestMethod.Delete, path: '/{!_id}' })
  remove: ResourceMethod<{_id: any}, any>;

  // Alias to save
  create(data: TFull, callback?: (res: TFull) => any): TFull {
    return this.save(data, callback);
  }
}
