import { Component, OnInit } from '@angular/core';
import {Post} from '../shared/interfaces/post';

@Component({
  selector: 'app-component-in-details',
  templateUrl: './component-in-details.component.html',
  styleUrls: ['./component-in-details.component.scss']
})
export class ComponentInDetailsComponent implements OnInit {

  posts: Post[] = [
    {title: 'Post 1', text: 'text post 1', id: 1},
    {title: 'Post 2', text: 'text post 2', id: 2}
  ];
  constructor() { }

  ngOnInit() {
  }
  updatePostList(post: Post) {
    this.posts.unshift(post);
    console.log(post);
  }
  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter( p => p.id !== id);
  }
}
