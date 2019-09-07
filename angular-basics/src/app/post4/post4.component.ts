import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>
        Post Title
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, aliquam cum deleniti enim exercitationem laboriosam libero, maxime minus nam necessitatibus neque nesciunt nobis quos reprehenderit sapiente, sunt. Ab, saepe?
      </p>
    </div>
  `,
  styles: [`
    .post4{
      padding: .5rem;
      border: 2px solid #000;
      margin-bottom: 1rem;
    }
    h2{
      font-size: 1rem;
    }
  `]
})
export class Post4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
