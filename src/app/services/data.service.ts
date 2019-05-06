import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { Config } from '../config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public fetchConfig(): Observable<Config> {
    return this.getJson('config');
  }

  public fetchContact(): Observable<Contact[]> {
    return this.getJson('contacts');
  }
  public fetchCoffee(): Observable<[]> {
    return this.getJson('coffeeTimes');
  }

  public getJson(fileName: string): Observable<any> {
    return this.http.get(`/assets/data/${fileName}.json`);
   }
}
