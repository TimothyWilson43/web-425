import { Component } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { bindingUpdated } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  template: 
  '<br /><br /><br /><div class="container-fluid two-way-form"><h2>Two-way binding example</h2><br /><div class="form-group"><input class="form-control" type="text" placeholder="Enter your name ..." [(ngModel)]="name"><button class="btn btn-primary form-control" (click)="name">Clear Name</button></div><div class="form-group"><p class="alert-success">Welcome to two-way binding, {{name}}! </p></div></div>',
  styles:[
    'two-way-form{width: 50%;}'
  ]
})
export class AppComponent {
  title = 'wilson-two-way-binding';
  name:string = "Dave Wilson";
}
