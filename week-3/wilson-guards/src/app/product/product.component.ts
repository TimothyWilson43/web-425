import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <h1 class="product">Product Detail Component</h1>
    <input placeholder="Enteryourname" type="text" [formControl]="name">
  `,
  styles: [`
    .product{
      background-color: cyan;
    }
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
