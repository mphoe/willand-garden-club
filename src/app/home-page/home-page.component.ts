import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Config, flowerShow } from '../config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public config: Config;
  public flowerShow: flowerShow;

  constructor(private dataService: DataService) {
    dataService.fetchConfig().subscribe((config) => {
      this.config = config;
      this.flowerShow = config.flowerShow;
    });
  }
}
