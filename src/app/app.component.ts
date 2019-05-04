import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flowerShowLink: string;
  public scheduleLink: string;

  constructor(private dataService: DataService) {
    this.flowerShowLink = dataService.fetchConfig().links.flowerShowLink;
    this.scheduleLink = dataService.fetchConfig().links.scheduleLink;
  }
}
