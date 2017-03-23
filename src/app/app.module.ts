import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

import HomePage from './home-page';
import PortfPage from './portf-page';
import ProjOne from './proj-one';
import ProjTwo from './proj-two';
import TranscriptPage from './transcript-page';
import ResumePage from './resume-page';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomePage,
    PortfPage,
    ProjOne,
    ProjTwo,
    TranscriptPage,
    ResumePage
  ],
  providers: [
    appRoutingProviders,
    Title
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }