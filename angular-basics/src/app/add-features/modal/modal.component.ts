import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Title modal';
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    console.log(this.title);
  }
}
