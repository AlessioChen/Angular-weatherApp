import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../../../models/city';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: City[] | null, text: string): City[] | null {

    if (!text || !items) {
      return items;
    } else {
      return items.filter((item) => {
        const findIndex = item.city.toLocaleLowerCase().indexOf(text.toLocaleLowerCase())
        return findIndex >= 0;
      });
    }
  }

}
