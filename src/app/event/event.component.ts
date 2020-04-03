import { Component, OnInit, Input } from "@angular/core";
import { UpcomingEvent } from "../upcoming-event";
import * as moment from "moment";
import "moment/moment";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  @Input() event: UpcomingEvent;

  public inFuture: boolean;

  constructor() {}

  ngOnInit() {
    this.isFutureEvent();
  }

  isFutureEvent() {
    this.inFuture = moment(this.event.date, "DD/MM/YYYY").isAfter();
  }
}
