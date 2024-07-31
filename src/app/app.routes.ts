import { Routes } from '@angular/router';

import { DataComponent } from './components/data/data.component';
import { LoginComponent } from './components/login/login.component';
import { RedirectUrlComponent } from './components/redirect-url/redirect-url.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'data', component: DataComponent },
  { path: 'redirect', component: RedirectUrlComponent },
];
