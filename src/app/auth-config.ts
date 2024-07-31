import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://api.fitbit.com',
  loginUrl: 'https://www.fitbit.com/oauth2/authorize',
  tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
  clientId: '23PGSH',
  redirectUri: window.location.origin + '/redirect',
  silentRefreshRedirectUri: 'http://localhost:4200/redirect',
  responseType: 'code',
  oidc: false,
  useSilentRefresh: true,
  requireHttps: 'remoteOnly',
  scope:
    'activity cardio_fitness electrocardiogram heartrate location nutrition oxygen_saturation profile respiratory_rate settings sleep social temperature weight',
  showDebugInformation: true,
};

// OAuth 2.0 Client ID
// 23PGSH

// Client Secret
// c8180c5751b24d88d70f3ae56a17e356

// Redirect URL
// http://localhost:4200

// OAuth 2.0: Authorization URI
// https://www.fitbit.com/oauth2/authorize

// OAuth 2.0: Access/Refresh Token Request URI
// https://api.fitbit.com/oauth2/token
