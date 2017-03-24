import { Routes, RouterModule } from '@angular/router';
import HomePage from './home-page';
import PortfPage from './portf-page';
import ProjOne from './proj-one';
import ProjTwo from './proj-two';
import ProjThree from './proj-three';
import TranscriptPage from './transcript-page';
import ResumePage from './resume-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePage },
  { path: 'portf-page', component: PortfPage,
    children: [
      { path: '', redirectTo: 'proj-one', pathMatch: 'full' },
      { path: 'proj-one', component: ProjOne },
      { path: 'proj-two', component: ProjTwo },
      { path: 'proj-three', component: ProjThree }
    ]
  },
  { path: 'transcript-page', component: TranscriptPage },
  { path: 'resume-page', component: ResumePage },
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes, { useHash: true });