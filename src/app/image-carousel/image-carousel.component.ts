import { Component, OnInit } from '@angular/core';
import ImageConfig from '../../assets/images/imageMeta.json';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  public images = ImageConfig;
  public displayCaption: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleCaption() {
    this.displayCaption = !this.displayCaption;
  }
}
