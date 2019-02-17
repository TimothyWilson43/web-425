import { Component } from '@angular/core';
import {Fruit} from "./fruit";
import {Observable} from "rxjs";
import {FruitService} from "./fruit.service";

@Component({
  selector: 'app-root',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Fruits</h2>
          <ul>
            <thead>
            <td *ngFor="let fruit of fruits | async">
              {{ fruits.name }} {{ fruits.pricePerPound }}
            </td>
            </thead>
          </ul>
        </div>
      </div>  
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'app';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}