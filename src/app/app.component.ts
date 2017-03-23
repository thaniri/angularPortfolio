import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
    <div id="leftCol">
      <nav>
        <div id="topNav">
         <a (click)="setTitle( 'Marek\\'s Homepage' )" [routerLink]="['./home-page']"><img id="headerimg" src="../icons/headerimg.svg" /> Marek Slabicki</a>
        </div>
        <div id="centerNav">
          <ul>
            <a (click)="setTitle( 'Marek\\'s Portfolio' )" [routerLink]="['./portf-page']" ><li>Portfolio</li></a>
            <a (click)="setTitle( 'Marek\\'s Transcipt' )" [routerLink]="['./transcript-page']"><li>Transcript</li></a>
            <a (click)="setTitle( 'Marek\\'s Resume' )" [routerLink]="['./resume-page']"><li>Curriculum Vitae</li></a>
          </ul>
        </div>
        <div id="botNav">
          <div>Marek Slabicki</div>
        </div>
      </nav>
    </div>
    <div id="rightCol">
      <header>
          <div class="headerTitle"><span class="pageTitle">HIHIHI{{title}}</span></div>
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
  constructor (private router: Router,
  private titleService: Title) {}

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}