import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  template: `
    <nav>
      <ul>
        <li><a [routerLink]="['./home-page']">Home Page</a></li>
        <li><a [routerLink]="['./portf-page']">Portfolio</a></li>
      </ul>
    </nav>
    <main>
    <div>
      <router-outlet></router-outlet>
    </div>
    </main>
  `
})
export class AppComponent {
  
  constructor (private router: Router) {}
  
  onClick () {
    this.router.navigate(['/portf-page', 456]);
  }
}