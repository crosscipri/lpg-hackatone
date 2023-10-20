import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EventsInterface } from '@pages/events-list/interfaces/events.interface';

import { EventsListService } from './services/events-list.service';

/**
 * EventsListPageComponent
 */
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss']
})
export class EventsListPageComponent {
  /**
   * Class constructor
   *
   * @param eventsListService Component business logic service
   */

  //listEvents: EventsInterface[] = [{ id: 0, name: 'Evento 1' }];
  listEvents: EventsInterface[] = Array(20).fill({
    id: 0,
    title: 'Evento',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
      '                    et dolore magna aliqua.'
  });
  testForm = new FormGroup({
    testValue: new FormControl(true)
  });

  constructor(private eventsListService: EventsListService) {}

  trackByEvent(_: number, item: EventsInterface) {
    return item.description;
  }
}
