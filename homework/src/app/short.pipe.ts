import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, Limit?: number): string | null {
    if (value == null){
      return null;
    }

    let actualLimit = (Limit) ? Limit : 50;
    return value.substring(0, actualLimit) + '...';
  }
  
}
