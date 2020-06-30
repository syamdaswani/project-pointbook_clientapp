import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserStorageProvider {

  constructor(public http: HttpClient, private storage: Storage) {
  }

  //Set user's email for local storage session
  setEmail(email: String) {
    this.storage.set('email', email);
  }

  //Get user's email for checking local storage session
  getEmail(): any {
    return this.storage.get('email').then(emailStorage => {
      return emailStorage;
    });
  }

  //Remove user's email for local storage session
  removeEmail() {
    this.storage.remove('email');
  }


  //Set user's phone number for local storage session
  setPhoneNumber(phoneNumber: any) {
    this.storage.set('phoneNumber', phoneNumber);
  }

  //Get user's phone number for checking local storage session
  getPhoneNumber(): any {
    return this.storage.get('phoneNumber').then(phoneNumberStorage => {
      return phoneNumberStorage;
    });
  }

  //Remove user's phone number for local storage session
  removePhoneNumber() {
    this.storage.remove('phoneNumber');
  }
}
