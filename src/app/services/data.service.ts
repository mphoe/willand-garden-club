import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contacts: Contact[] = [
    { name: 'Michael Schmoe', email: 'michaelh@fakemail.com', phone: '011899390819' },
    { name: 'Alex Schilcox', email: 'nnnnaaaaah@gmail.com'},
    { name: 'Blasbo Babbins', phone: '0123456789'}
  ];


  public fetchConfig(success) {
    this.fetchFile('config', success);
  }

  public fetchEnvironment() {
    return environment;
  }

  public fetchContacts(): Contact[] {
    return this.contacts;
  }

  /**
   * NOT CURRENTLY FUNCTIONAL: I can't work out how to get to public files
   * @param {*} filename the name of the json file you're after
   * @param {*} success success callback
   */
  private fetchFile(filename, success) {
    fetch(`${environment.PUBLIC_URL}/data/${filename}.json`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((json) => {
        success(json);
      })
  }
}
