import {Injectable} from '@angular/core';
import {DashResource} from './core/dash-resource';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {RequestMethod} from "@angular/http";


interface ICat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
@ResourceParams({pathPrefix: 'cats'})
export class CatsService extends DashResource{
  @ResourceAction({method: RequestMethod.Get, isArray: true})
  getCats: ResourceMethod<void, number[]>;

  @ResourceAction({method: RequestMethod.Post})
  setCats: ResourceMethod<ICat, void>;
}
