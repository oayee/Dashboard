import {Injectable} from '@angular/core';
import {DashResource} from './core/dash-resource';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {RequestMethod} from "@angular/http";

@Injectable()
@ResourceParams({pathPrefix: 'cats'})
export class AppService extends DashResource{
  @ResourceAction({method: RequestMethod.Get, isArray: true})
  getCats: ResourceMethod<void, number[]>;
}
