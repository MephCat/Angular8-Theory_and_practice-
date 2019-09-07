import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from '../../shared/interfaces/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input('post') post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.infoRef.nativeElement);
  }

}
