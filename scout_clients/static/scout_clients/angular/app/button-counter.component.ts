import { Component } from '@angular/core';

@Component({
  selector: 'button-counter',
  template: `
  <button (click) ="clickCount()">You clicked me {{ count }} times. (angular component)</button>
  `,
})

export class ButtonCounterComponent {

  count: number;

  constructor(){
    console.log("I am Angular!")
    this.count = 0;
  }

  clickCount() {
    this.count++;
  }

}
