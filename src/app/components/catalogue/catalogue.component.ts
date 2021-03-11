import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage } from '../../utils/localStorage';

@Component({
  selector: 'app-catalogue-component',
  templateUrl: './catalogue.component.html',
  styles: [
    `
      label,
      input {
        display: block;
        width: 100%;
        margin-bottom: 1em;
      }
    `,
  ],
})
export class CatalogueComponent {

  constructor(private router: Router) {}

}
