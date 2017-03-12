import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import HomePage from './home-page';
import ComponentTwo from './portf-page';
import ProjOne from './proj-one';
import ProjTwo from './proj-two';
import ComponentThree from './transcript-page';
import ResumePage from './resume-page';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomePage,
    ComponentTwo,
    ProjOne,
    ProjTwo,
    ComponentThree,
    ResumePage
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}