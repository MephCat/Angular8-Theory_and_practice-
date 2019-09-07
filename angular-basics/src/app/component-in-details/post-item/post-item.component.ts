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

export class PostItemComponent implements OnInit,
                                          OnChanges,
                                          DoCheck,
                                          AfterContentInit,
                                          AfterContentChecked,
                                          AfterViewInit,
                                          AfterViewChecked,
                                          OnDestroy {

  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges' +  changes);
  }
  ngOnInit() {
    console.log('ngOninit');
    // console.log(this.infoRef.nativeElement);
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  remove() {
    this.onRemove.emit(this.post.id);
  }
}
