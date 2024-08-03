import { Routes } from '@angular/router';

import { DataComponent } from './components/data/data.component';
import { FoodLogComponent } from './components/food-log/food-log.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RedirectUrlComponent } from './components/redirect-url/redirect-url.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'data', component: DataComponent },
  { path: 'redirect', component: RedirectUrlComponent },
  { path: 'food-log', component: FoodLogComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'home' },
];
