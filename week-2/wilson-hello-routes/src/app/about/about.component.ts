import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
        <div class="row">
          <h2>You've Reached the About Page!</h2>
        </div>
    </div>
  `,
  styles: ['.container {margin-top: 20px;}',
            'h2 {color: red;}'
]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
