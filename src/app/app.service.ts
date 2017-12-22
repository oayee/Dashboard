import {Injectable} from '@angular/core';
import {DashResource} from './core/dash-resource';
import {ResourceAction, ResourceMethod, ResourceParams} from 'ngx-resource';
import {RequestMethod} from "@angular/http";


interface IDog {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
@ResourceParams({pathPrefix: 'dogs'})
export class AppService extends DashResource{
  @ResourceAction({method: RequestMethod.Get, isArray: true})
  getCats: ResourceMethod<void, number[]>;

  @ResourceAction({method: RequestMethod.Post})
  setDogs: ResourceMethod<IDog, void>;
}
