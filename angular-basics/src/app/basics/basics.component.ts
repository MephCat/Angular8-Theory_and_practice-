import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  title = 'Angular basics';
  inputVal = '';

  text = '';

  backGroundToggle = false;

  toggle = false;

  arr = [
    1, 1 , 2, 3, 5, 8, 13
  ];

  postList = [
    { title: 'Post 1', author: 'User 1', comment: [
        {name: 'User1', text: 'lorem 1'},
        {name: 'User2', text: 'lorem 2'},
        {name: 'User3', text: 'lorem 3'}
      ]},
    { title: 'Post 2', author: 'User 2', comment: [
        {name: 'User1', text: 'lorem 1'},
        {name: 'User2', text: 'lorem 2'},
        {name: 'User3', text: 'lorem 3'}
      ]}
  ];

  now: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    console.log(this.postList);
  }

  onInput(event: KeyboardEvent) {
    this.inputVal = (event.target as HTMLInputElement).value;
  }

  onBlur(str: string) {
    this.inputVal = str;
  }
}
