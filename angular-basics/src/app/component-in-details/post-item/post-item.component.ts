import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import {Post} from '../../shared/interfaces/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  //стратегия поведения при изменении  (OnPush - изменяет только при изменении объекта)
  changeDetection: ChangeDetectionStrategy.OnPush,
  //определяет стили на глобальные
  encapsulation: ViewEncapsulation.None
})

export class PostItemComponent {

  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  constructor() {
    console.log('constructor');
  }
  remove() {
    this.onRemove.emit(this.post.id);
  }
}
