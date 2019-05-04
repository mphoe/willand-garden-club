import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlickrData, FlickrResp, Photo } from '../flickr-data';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  public galleryId: string;
  private apiKey: string;
  private secret: string;

  private flickrBaseUrl: string = "https://api.flickr.com/services/rest/?method=";
  private getPhotosUrl: string = "flickr.galleries.getPhotos";

  constructor(dataService: DataService, private http: HttpClient) {
    const config = dataService.fetchConfig();
    this.galleryId = config.flickrGalleryId;
    this.apiKey = config.flickrApiKey;
    this.secret = config.flickrSecret;
   }

   private buildUrl(): string {
     return `${this.flickrBaseUrl}${this.getPhotosUrl}&api_key=${this.apiKey}&gallery_id=${this.galleryId}&format=json&nojsoncallback=1`;
   }

   /**
    * Return array of trimmed down photo objects
    *
    * @param {FlickrData} photos
    * @returns {Photo[]}
    * @memberof PhotoServiceService
    */
   public processPhotos(photos: FlickrData): Photo[] {
     return photos.photo.map( (photo) => {
       //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
      const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      return new Photo(photo.id, url, photo.title);
     });
   }

   public getPhotos(): Observable<FlickrData> {
    return this.http.get(this.buildUrl()).pipe(map((data: FlickrResp) => {
      return data.photos;
    }));
   }

}
