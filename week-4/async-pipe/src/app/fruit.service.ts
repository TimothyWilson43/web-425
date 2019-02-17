import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";
import { Observable } from 'rxjs';

@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: "Bananas", pricePerPound: "$2.00", quantity: "12"},
    {id: 2, name: "Apples", pricePerPound: "$5.00", quantity: "15"},
    {id: 3, name: "Pears", pricePerPound: "$1.00", quantity: "3"},
    {id: 4, name: "Oranges", pricePerPound: "$2.00", quantity: "10"},
    {id: 5, name: "Grapes", pricePerPound: "$1.50", quantity: "13"}
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return Observable.of(this.fruits);
  }
}