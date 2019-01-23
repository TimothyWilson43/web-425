import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    The seller is Joe Blow, id {{sellerId}}
  `,
  styles: [
    `:host {background: yellow;}`
  ]
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
