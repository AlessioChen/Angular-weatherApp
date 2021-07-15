import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../../../models/city';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: City[] | null) {

    items?.sort((a, b) => {
      let x = a.city.toLocaleLowerCase();
      let y = b.city.toLocaleLowerCase();
      if (x < y) {
        return -1;
      } else {
        return 1
      }

    })
    return items;
  }

}
