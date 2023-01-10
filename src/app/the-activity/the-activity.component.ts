// imports for Service, APIresponses

import { Component, OnInit } from '@angular/core';
import { BooringService } from '../booring.service';
import { BoringApiResponse } from '../BoringApiResponse';

// below is the Html and Styles for the component

@Component({
  selector: 'app-the-activity',
  template: `<h2>Activity:</h2>
    <p>{{ newActivity.activity }}</p>
    <div><button (click)="reloadBtn()">Reload</button></div>`,
  styles: [
    `
      h2 {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }
      p {
        text-align: center;
        font-size: 20px;
        font-family: cursive;
      }
      div {
        display: flex;
        justify-content: center;

        padding-top: 20px;
      }
      button {
        border: 2px solid black;
        border-radius: 5px;
        width: 150px;
        height: 35px;
        font-family: cursive;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
      }
    `,
  ],
})
export class TheActivityComponent implements OnInit {
  constructor(private _BooringService: BooringService) {}
  newActivity: BoringApiResponse = { activity: '' };

  reloadBtn() {
    // This is the button  that will relode the activity
    this.ngOnInit();
  }

  ngOnInit(): void {
    this._BooringService.getActivity().subscribe((data) => {
      this.newActivity = data;
    });
  }
}
