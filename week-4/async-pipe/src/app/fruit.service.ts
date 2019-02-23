import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable } from 'rxjs';


@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    { id: 1, firstName: "Bananas", pricePerPound: "$2.00", quantity: "12" },
    { id: 2, firstName: "Apples", pricePerPound: "$5.00", quantity: "15" },
    { id: 3, firstName: "Pears", pricePerPound: "$1.00", quantity: "3" },
    { id: 4, firstName: "Oranges", pricePerPound: "$2.00", quantity: "10" },
    { id: 5, firstName: "Grapes", pricePerPound: "$1.50", quantity: "13" }
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return Observable.of(this.fruits);
  }
}