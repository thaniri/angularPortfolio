import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  template: `
    <div id="leftCol">
      <nav>
        <div id="topNav">
          <a [routerLink]="['./home-page']">Marek Slabicki</a>
        </div>
        <div id="centerNav">
          <ul>
            <li><a [routerLink]="['./portf-page']">Portfolio</a></li>
            <li><a [routerLink]="['./transcript-page']">Transcript</a></li>
          </ul>
        </div>
        <div id="botNav">
          <span>Marek Slabicki</span>
        </div>
      </nav>
    </div>
    <div id="rightCol">
      <header>
          <p>header</p>
      </header>
      <main>
        <div>
          <router-outlet></router-outlet>
        </div>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  `
})

export class AppComponent {
  constructor (private router: Router) {}

}