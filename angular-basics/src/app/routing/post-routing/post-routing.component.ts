import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TodosService} from '../../http-client/services/todos.service';
import {Post} from '../../shared/interfaces/post';

@Component({
  selector: 'app-post-routing',
  templateUrl: './post-routing.component.html',
  styleUrls: ['./post-routing.component.scss']
})
export class PostRoutingComponent implements OnInit {

  post: Post;
  constructor(private route: ActivatedRoute,
              private postsServices: TodosService ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      this.postsServices.getPost(+params.id).subscribe( post => {
        this.post = post as Post;
      });
    });
  }

}
