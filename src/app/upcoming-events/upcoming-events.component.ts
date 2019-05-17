import { Component, OnInit } from '@angular/core';
import { UpcomingEvent } from '../upcoming-event';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  public upcomingEvents: UpcomingEvent[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUpcomingEvents().subscribe((events: UpcomingEvent[]) => {
      this.upcomingEvents = events;
    });
  }

}
