import { Pipe, PipeTransform } from '@angular/core';
import { IList } from './lessons4.component';
@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(arrList:IList[] , text:string): IList[]{
    if(!arrList)return [];
    if(!text)return arrList;
    return arrList.filter(list=>list.firstName.toLowerCase().includes(text.toLowerCase()) ||
    list.lastName.toLowerCase().includes(text.toLowerCase()) ||
    list.number.includes(text))
  }

}
 