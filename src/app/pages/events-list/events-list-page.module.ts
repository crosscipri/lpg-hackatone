import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIslandModule, TuiToggleModule } from '@taiga-ui/kit';

import { EventsListPageComponent } from './events-list-page.component';
import { EventsListRoutingPageModule } from './events-list-routing-page.module';

/**
 * EventsListPageModule
 */
@NgModule({
  declarations: [EventsListPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventsListRoutingPageModule,
    TuiToggleModule,
    TuiIslandModule,
    TuiButtonModule
  ]
})
export class EventsListPageModule {}
