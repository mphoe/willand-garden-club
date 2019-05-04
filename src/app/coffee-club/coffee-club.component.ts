import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { DataService } from '../services/data.service';
import moment from 'moment';

@Component({
  selector: 'app-coffee-club',
  templateUrl: './coffee-club.component.html',
  styleUrls: ['./coffee-club.component.scss']
})
export class CoffeeClubComponent implements OnInit {

  public nextMeeting: moment.Moment;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.nextMeeting = this.getNextMeeting();
  }

  private getNextMeeting(): moment.Moment {

    let allMeetingTimes: string[] = this.dataService.fetchCoffee();

    let momMeetingTimes: moment.Moment[] = allMeetingTimes.map( (time: string) => moment(time, "DD/MM/YYYY"));
    let futureMeetingTimes: moment.Moment[] = momMeetingTimes.filter( time => time.isAfter());

    return futureMeetingTimes[0];

  }

}
