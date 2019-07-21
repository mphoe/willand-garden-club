import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { FlickrData, FlickrResp, Photo } from '../flickr-data';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  public galleryId: string;
  private url: string;

  private flickrBaseUrl: string = "https://api.flickr.com/services/rest/?method=";
  private getPhotosUrl: string = "flickr.photosets.getPhotos";

  constructor(private dataService: DataService, private http: HttpClient) {
  }

  private buildUrl(config): string {
    return `${this.flickrBaseUrl}${this.getPhotosUrl}&api_key=${config.flickrApiKey}&photoset_id=${config.flickrGalleryId}&format=json&nojsoncallback=1`;
  }

  /**
   * Return array of trimmed down photo objects
   *
   * @param {FlickrData} photos
   * @returns {Photo[]}
   * @memberof PhotoServiceService
   */
  public processPhotos(photos: FlickrData): Photo[] {
    return photos.photo.map((photo) => {
      //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
      const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
      return new Photo(photo.id, url, photo.title);
    });
  }

  public getPhotos(config): Observable<FlickrData> {
    return this.http.get(this.buildUrl(config)).pipe(map((data: FlickrResp) => {
      return data.photoset;
    }));
  }

}
