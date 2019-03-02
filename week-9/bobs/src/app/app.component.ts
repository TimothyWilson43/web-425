import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'bobs-repair-shop';
  totalParts: number = 0;
  laborHours: number = 0;

  services = [
    {
      name: 'Password Reset',
      id: '1',
      selected: false,
      price: 39.99
    },
    {
      name: 'Spyware Removal',
      id: '2',
      selected: false,
      price: 99.99
    },
    {
      name: 'RAM Upgrade',
      id: '3',
      selected: false,
      price: 129.99
    },
    {
      name: 'Software Installation',
      id: '4',
      selected: false,
      price: 49.99
    },
    {
      name: 'Total System Tune-Up',
      id: '5',
      selected: false,
      price: 89.99
    },
    {
      name: 'Keyboard Cleaning',
      id: '6',
      selected: false,
      price: 45.00
    },
    {
      name: 'Disk Clean-Up',
      id: '7',
      selected: false,
      price: 129.99
    }
  ]


  calculateTotals() {
    var selected = this.services.filter(s => {
      return s.selected;
    });
    var total = 0;
    selected.forEach(function (service) {
      total += service.price;
    });
    this.totalParts = parseFloat( total.toFixed(2) );
  }

  onSubmit(formData) {
    var selected = this.services.filter(s => {
      return s.selected;
    });
    var message = "You selected the following services: ";
    selected.forEach(function (service) {
      message += "\n" + service.name + ": $" + service.price;
    });
    message += "\nParts: $" + this.totalParts;
    var total = this.totalParts;
    var labor = this.laborHours * 50;
    message += "\nLabor: $" + labor;
    total += labor;


    message += "\nTotal Price: $" + total;
    console.log(formData);
    alert(message);
  }

}


