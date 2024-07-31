import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-redirect-url',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirect-url.component.html',
  styleUrls: ['./redirect-url.component.css'],
})
export class RedirectUrlComponent implements OnInit {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public ngOnInit(): void {
    this.authService.tryLoginCodeFlow().then(() => {
      this.router.navigate(['data']);
    });
  }
}
