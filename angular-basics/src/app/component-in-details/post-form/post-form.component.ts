import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../../shared/interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  //static = true - для обращения в onInit в Angular 9 будет удалён(скорее всего)
  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;

  title = '';
  text = '';

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

}
