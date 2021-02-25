import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText'
})
export class HighlightTextPipe implements PipeTransform {

  transform(value: string, filter: string): string {
    if (filter.length === 0) {
      return value;
    }

    const search = new RegExp(filter, 'ig');

    return value.replace(search, 'x');
  }

} 
