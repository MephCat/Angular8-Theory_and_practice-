import { Component, OnInit } from '@angular/core';
import {Post} from '../shared/interfaces/post';

@Component({
  selector: 'app-component-in-details',
  templateUrl: './component-in-details.component.html',
  styleUrls: ['./component-in-details.component.scss']
})
export class ComponentInDetailsComponent implements OnInit {

  posts: Post[] = [
    {title: 'Post 1', text: 'text post 1'},
    {title: 'Post 2', text: 'text post 2'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
