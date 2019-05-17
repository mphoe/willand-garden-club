import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {

  public config: Config = new Config();

  constructor(private dataService: DataService) {
    dataService.fetchConfig().subscribe((config) => {
      this.config = config;
    });
  }
}
