import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
    <div id="leftCol">
      <nav>
        <div id="topNav">
         <a (click)="setTitle( 'Homepage' )" (click)="setPageTitle()" [routerLink]="['./home-page']"><img id="headerimg" src="../icons/headerimg.svg" /> Marek Slabicki</a>
        </div>
        <div id="centerNav">
          <ul>
            <a (click)="setTitle( 'Portfolio' )" (click)="setPageTitle()" [routerLink]="['./portf-page']" ><li>Portfolio</li></a>
            <a (click)="setTitle( 'Transcipt' )" (click)="setPageTitle()" [routerLink]="['./transcript-page']"><li>Transcript</li></a>
            <a (click)="setTitle( 'Resume' )" (click)="setPageTitle()" [routerLink]="['./resume-page']"><li>Curriculum Vitae</li></a>
          </ul>
        </div>
        <div id="botNav">
          <div>
            <span>Marek Slabicki</span>
            <span><a href="https://github.com/thaniri"><img src="../icons/github/github-original.svg"/> Github</a></span>
            <span><a href="https://www.linkedin.com/in/marek-slabicki-1954a9135/"><img src="../icons/linkedin/linkedin.png"/> LinkedIn</a></span>
          </div>
        </div>
      </nav>
    </div>
    <div id="rightCol">
      <header>
          <div class="headerTitle"><span class="pageTitle">{{title}}</span></div>
      </header>
      <main>
        <div>
          <router-outlet></router-outlet>
        </div>
      </main>
      <footer>
        <button id="scrollUp"><img (click)="scrollUp()" src="./icons/buttons/upArrow.png"/></button>
      </footer>
    </div>
  `
})

export class AppComponent {
  title = 'Homepage';

  constructor (private router: Router,
  private titleService: Title) {}

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  public setPageTitle() {
    this.title = this.titleService.getTitle();
  }

  public scrollUp(){
    window.scrollTo(0,0);
  }

}