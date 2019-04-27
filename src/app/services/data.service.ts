import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import Config from '../../assets/data/config.json';
import Contacts from '../../assets/data/contacts.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public fetchConfig() {
    return Config;
  }

  public fetchContacts(): Contact[] {
    return Contacts;
  }
}
