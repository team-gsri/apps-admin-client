import { Route } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs-list/joueurs-list.component';
import { JoueursDetailsComponent } from './joueurs/joueurs-details/joueurs-details.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/joueurs', pathMatch: 'full' },
  { path: 'joueurs/:id', component: JoueursDetailsComponent },
  { path: 'joueurs', component: JoueursComponent },
];
