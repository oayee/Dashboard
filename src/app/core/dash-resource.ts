import {Resource, ResourceParams} from 'ngx-resource';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
@ResourceParams({url: environment.host})
export class DashResource extends Resource {
  constructor(http: Http) {
    super(http);
  }
}
