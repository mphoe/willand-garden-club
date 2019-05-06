import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Config } from '../config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public config: Config;
  public flowerShowLink: string;
  public scheduleLink: string;

  constructor(private dataService: DataService) {
    dataService.fetchConfig().subscribe((config) => {
      this.config = config;
      this.flowerShowLink = config.links.flowerShowLink;
      this.scheduleLink = config.links.scheduleLink;
    });
  }
}
