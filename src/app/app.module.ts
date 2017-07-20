import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

import HomePage from './home-page';
import PortfPage from './portf-page';
import TPC2017 from './TPC2017-page';
import CrazyEights from './crazy-eights-page';
import JSVisualizations from './js-visualizations-page';
import TranscriptPage from './transcript-page';
import ResumePage from './resume-page';
import ContactPage from './contact-page';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomePage,
    PortfPage,
    TPC2017,
    CrazyEights,
    JSVisualizations,
    TranscriptPage,
    ResumePage,
    ContactPage
  ],
  providers: [
    appRoutingProviders,
    Title
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }