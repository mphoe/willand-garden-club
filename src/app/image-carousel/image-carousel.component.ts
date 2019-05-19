import { Component, Input, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service.js';
import { Photo } from '../flickr-data.js';
import { Config } from 'protractor';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnChanges {

  @Input() config: Config;
  @ViewChild('carousel') carousel: any;

  public images: Photo[];
  public displayCaption: boolean = true;
  constructor(private photoService: PhotoServiceService) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.config && changes.config.currentValue.flickrApiKey) {
      this.observePhotos();
    }

  }

  private observePhotos() {
    this.photoService.getPhotos(this.config).subscribe((data) => {
      this.images = this.photoService.processPhotos(data);
    })
  }
}
