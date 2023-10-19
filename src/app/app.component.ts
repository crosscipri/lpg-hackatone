import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpenSidebar!: boolean;
  isOpenMenu(event: boolean) {
    this.isOpenSidebar = event;
  }
}
