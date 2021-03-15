import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div class="app-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .app-container {
        max-width: 75em;
        width: 100%;
        margin: 0 auto;
        padding: 60px 1.5em 0 1.5em;
      }
    `,
  ],
})
export class AppContainerComponent {}
