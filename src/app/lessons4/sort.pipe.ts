import { Pipe, PipeTransform } from '@angular/core';
import { IList } from './lessons4.component';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
  transform(arrList: IList[], sortKey: keyof IList | null, sortDirection: 'asc' | 'desc' | null): IList[] {
    if (!arrList || !sortKey || !sortDirection) return arrList;

    return arrList.sort((a, b) => {
      const comparison = a[sortKey] > b[sortKey] ? 1 : (a[sortKey] < b[sortKey] ? -1 : 0);
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }
}