import {Pipe, PipeTransform} from "@angular/core";
import {status} from "./statuses";

@Pipe({name: 'statusPipe'})
export class StatusPipe implements PipeTransform {
  transform(value: status) {
    return null;
  }
}
