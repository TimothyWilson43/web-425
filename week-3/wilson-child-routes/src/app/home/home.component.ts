import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Welcome Home!
    </p>
  `,
  styles: [
    `
    p{
    color: blue;
    font-size: 40px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
