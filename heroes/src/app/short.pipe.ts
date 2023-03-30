import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, limit?: number): string | null {

if(!value)
    return null;

  let actrualLimit= limit ?? 50;

    return value.substring(0,actrualLimit) + "...";
  }

}
