import { Component } from '@angular/core';

import { MAuthService } from '@mercadona/core/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Class constructor
   *
   * @param {MAuthService} mAuthService Inject service auth
   */
  constructor(public mAuthService: MAuthService) {}
}
