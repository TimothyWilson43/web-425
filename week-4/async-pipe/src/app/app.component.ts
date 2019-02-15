import { Component } from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Famous Composers</h2>
          <ul>
            <li *ngFor="let user of users | async">
              {{ user.firstName }} {{ user.lastName }}
            </li>
          </ul>
        </div>
      </div>  
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Observable<User[]>;
  title = 'app';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}