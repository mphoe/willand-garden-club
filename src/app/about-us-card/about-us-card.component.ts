import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service';
import { Photo } from '../flickr-data';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss']
})
export class AboutUsCardComponent implements OnInit {

  public image: Photo;
  public displayCaption: boolean = true;
  constructor(private photoService: PhotoServiceService) { }

  ngOnInit() {
    this.observePhotos();
  }

  private observePhotos() {
    this.photoService.getPhotos().subscribe((data) => {
      this.image = this.photoService.processPhotos(data)[0];
    })
  }
}
