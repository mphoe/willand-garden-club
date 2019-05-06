import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public flowerShowLink: string;
  public scheduleLink: string;

  constructor(private dataService: DataService) {
    this.flowerShowLink = dataService.fetchConfig().links.flowerShowLink;
    this.scheduleLink = dataService.fetchConfig().links.scheduleLink;
  }
}
