import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Class constructor
   *
   * @param router
   */

  homeUrl: string[] = ['/'];
  logoUrl: string;

  constructor(private router: Router) {
    this.logoUrl = `url('../../../assets/img/Mercadona_IT.svg')`;
  }

  logout() {
    // eslint-disable-next-line no-console
    console.log('logout');
  }

  navigateToHome() {
    if (this.router.url === '/') {
      window.location.reload();
    } else {
      this.router.navigate(this.homeUrl);
    }
  }
}
