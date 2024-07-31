import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataComponent } from './components/data/data.component';
import { LoginComponent } from './components/login/login.component';
import { RedirectUrlComponent } from './components/redirect-url/redirect-url.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LoginComponent, DataComponent, RedirectUrlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService],
})
export class AppComponent {
  public title = 'FitnessTracker';
}
