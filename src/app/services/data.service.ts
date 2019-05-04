import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import ConfigFile from '../../assets/data/config.json';
import ContactsFile from '../../assets/data/contacts.json';
import CoffeeFile from '../../assets/data/coffeeTimes.json';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public fetchConfig(): Config {
    return ConfigFile;
  }

  public fetchContacts(): Contact[] {
    return ContactsFile;
  }

  public fetchCoffee(): string[] {
    return CoffeeFile;
  }
}
