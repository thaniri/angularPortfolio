import { Routes, RouterModule } from '@angular/router';
import HomePage from './home-page';
import PortfPage from './portf-page';
  import TPC2017 from './TPC2017-page';
  import CrazyEights from './crazy-eights-page';
  import JSVisualizations from './js-visualizations-page';
import TranscriptPage from './transcript-page';
import ResumePage from './resume-page';
import ContactPage from './contact-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePage },
  { path: 'portf-page', component: PortfPage,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'TPC2017', component: TPC2017 },
      { path: 'crazy-eights', component: CrazyEights },
      { path: 'js-visualizations', component: JSVisualizations }
    ]
  },
  { path: 'transcript-page', component: TranscriptPage },
  { path: 'resume-page', component: ResumePage },
  { path: 'contact-page', component: ContactPage },
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes, { useHash: true });