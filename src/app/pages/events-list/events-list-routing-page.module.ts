import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListPageComponent } from './events-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListPageComponent,
    children: []
  }
];

/**
 * EventsListRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsListRoutingPageModule {}
