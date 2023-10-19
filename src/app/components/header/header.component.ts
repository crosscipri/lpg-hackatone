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
  constructor(private router: Router) {}
  homeUrl: string[] = ['/'];
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
