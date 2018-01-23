import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'namesString'})
export class NamesStringPipe implements PipeTransform {
  transform(value: any[]) {
    return value ? value.map(x => x.name).join(' , ') : null;
  }
}
