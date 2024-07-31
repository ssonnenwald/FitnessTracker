import { inject, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';

import { authConfig } from '../auth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private oauthService: OAuthService = inject(OAuthService);

  public constructor() {
    this.initAuth();
  }

  public initAuth(): void {
    this.oauthService.configure(authConfig);
    //this.oauthService.setupAutomaticSilentRefresh();
  }

  public login(): void {
    this.oauthService.initCodeFlow();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public isLoggedIn(): Observable<boolean> {
    return of(this.oauthService.hasValidIdToken());
  }

  public getAccessToken(): string {
    const accessToken = this.oauthService.getAccessToken();
    return accessToken;
  }

  public refreshToken(): void {
    this.oauthService.refreshToken();
  }

  public tryLoginCodeFlow(): Promise<void> {
    return this.oauthService.tryLoginCodeFlow();
  }
}
