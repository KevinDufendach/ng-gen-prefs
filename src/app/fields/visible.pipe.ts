import { Pipe, PipeTransform } from '@angular/core';
import {Field} from '../../../projects/ng-redcap/src/field/field';
import {List} from 'immutable';

@Pipe({
  name: 'visible'
})
export class VisiblePipe implements PipeTransform {

  transform(items: List<Field<any>>): List<Field<any>> {
    const filteredList: Field<any>[] = [];

    // const filteredList = new Array<Field<any>>();

    for (const field of items) {
      if (field.shouldDisplay()) {
        filteredList.push(field);
      }
    }

    return List(filteredList);
  }

}
