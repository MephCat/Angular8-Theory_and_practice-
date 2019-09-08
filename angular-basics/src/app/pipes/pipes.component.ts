import { Component, OnInit } from '@angular/core';
import {Post} from '../shared/interfaces/post';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  e: number = Math.E;
  str = 'pipe string';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  search = '';
  posts: Post[] = [
    {title: 'Beer', text: 'Great World Beer'},
    {title: 'Bread', text: 'Great World Bread'},
    {title: 'JS', text: 'Great World Language'},
  ];
  searchField = 'title';

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolve');
    },4000);
  });

  dateN$: Observable<Date> = new Observable( obs => {
    setInterval(() => {
      obs.next(new Date());
    },1000);
  });
  constructor() { }

  ngOnInit() {
  }
  addPost() {
    this.posts.unshift({
      title: 'Angular',
      text: 'Angular 8'
    });
  }
}
