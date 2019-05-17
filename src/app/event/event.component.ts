import { Component, OnInit, Input } from '@angular/core';
import { UpcomingEvent } from '../upcoming-event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {

  @Input() event: UpcomingEvent;


  constructor() { }

  ngOnInit() {
  }

}
