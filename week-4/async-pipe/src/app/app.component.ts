import { Component } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable } from "rxjs/Observable";
import { FruitService } from "./fruit.service";

@Component({
  selector: 'app-root',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Fruits</h2>
          <ul>
            <li *ngFor="let fruit of fruits | async">
              {{ fruit.firstName }} {{ fruit.pricePerPound }}
            </li>
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

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}