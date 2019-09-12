import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../http-client/services/todos.service';
import {Post} from '../../shared/interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  constructor(private todoServices: TodosService ) { }

  ngOnInit() {
  this.getPost();
  }
  getPost() {
    this.todoServices.fetchTodos().subscribe( data => {
      // @ts-ignore
      this.posts = data;
      console.log(this.posts);
    });
  }
}
