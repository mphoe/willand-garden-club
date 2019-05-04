import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service.js';
import { Photo } from '../flickr-data.js';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  public images: Photo[];
  public displayCaption: boolean = true;
  constructor(private photoService: PhotoServiceService) { }

  ngOnInit() {
    this.observePhotos();
  }

  private observePhotos() {
    this.photoService.getPhotos().subscribe((data) => {
      this.images = this.photoService.processPhotos(data);
    })
  }

  toggleCaption() {
    this.displayCaption = !this.displayCaption;
  }
}
