import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <div *ngIf="givenName">
      <h2>Welcome, {{givenName}}!</h2>
      <button (click)="logout()">Logout</button>
    </div>

    <div *ngIf="!givenName">
      <button (click)="login()">Login</button>
    </div>`
})
export class HomeComponent {

  constructor(private oauthService: OAuthService) {
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }

}
