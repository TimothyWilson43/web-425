import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
      This is a product...{{productId}}
    </p>
  `,
  styles: []
})
export class ProductDescriptionComponent implements OnInit {

  productId = 1234;

  constructor() { }

  ngOnInit() {
  }

}
