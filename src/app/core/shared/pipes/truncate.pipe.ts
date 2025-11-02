import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 20, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) return '';
    
    if (value.length <= limit) {
      return value;
    }

    if (completeWords) {
      let lastSpace = value.substr(0, limit).lastIndexOf(' ');
      if (lastSpace > -1) {
        limit = lastSpace;
      }
    }   

    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}
