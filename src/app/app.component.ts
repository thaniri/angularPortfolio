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
            <a [routerLink]="['./portf-page']"><li>Portfolio</li></a>
            <a [routerLink]="['./transcript-page']"><li>Transcript</li></a>
          </ul>
        </div>
        <div id="botNav">
          <span>Marek Slabicki</span>
        </div>
      </nav>
    </div>
    <div id="rightCol">
      <header>
          <h1>{{title}}</h1>
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