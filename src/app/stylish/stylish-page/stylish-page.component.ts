import { Component } from '@angular/core';

@Component({
  selector: 'app-stylish-page',
  template: `
    <h1>Stylish Box with [ngStyle] and [style]</h1>
    <app-stylish></app-stylish>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }
    `
  ]
})
export class StylishPageComponent {}
