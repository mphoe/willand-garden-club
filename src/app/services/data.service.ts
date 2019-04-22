import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public fetchConfig(success) {
    this.fetchFile('config', success);
  }

  public fetchEnvironment() {
    return environment;
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
