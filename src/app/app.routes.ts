import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';
import { NotFound } from './not-found/not-found';
import { ConferanceDetails } from './conferance-details/conferance-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'list', component: ConferanceList },
  { path: 'details/:id', component: ConferanceDetails },
  { path: '**', component: NotFound }
];
