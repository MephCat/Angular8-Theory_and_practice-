import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../interfaces/post';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  //pure для динамического изминения
  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => {
      return post[field].toLowerCase().includes(search.toLowerCase());
    });
  }

}
