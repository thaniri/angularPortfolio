import { Routes, RouterModule } from '@angular/router';
import HomePage from './home-page';
import ComponentTwo from './portf-page';
import ProjOne from './proj-one';
import ProjTwo from './proj-two';
import ComponentThree from './transcript-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePage },
  { path: 'portf-page', component: ComponentTwo,
    children: [
      { path: '', redirectTo: 'proj-one', pathMatch: 'full' },
      { path: 'proj-one', component: ProjOne },
      { path: 'proj-two', component: ProjTwo }
    ]
  },
  { path: 'transcript-page', component: ComponentThree }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);