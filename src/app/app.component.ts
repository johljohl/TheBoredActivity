import { Component } from '@angular/core';

// the main app component that displays Html and Styles on the startpage
@Component({
  selector: 'app-root',
  template: `
    <h1>The Bored Activity</h1>
    <div class="container"><app-the-activity></app-the-activity></div>
  `,
  styles: [
    `
      h1 {
        text-align: center;
      }
      .container {
        width: 600px;
        height: 300px;
        background-color: #eee;
        margin: auto;
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'theBoredActivity';
}
