import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riadDetail'
})
export class RiadDetailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
