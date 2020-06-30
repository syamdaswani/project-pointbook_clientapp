import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserStorageProvider} from "../../providers/local-storage/user-storage";
import {PbServicesProvider} from "../../providers/pb-services/pb-services";
import {ServiceModel} from "../../models/ServiceModel";
import {SharedFunctionsProvider} from "../../providers/shared-functions/shared-functions";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PbServicesProvider]
})
export class HomePage {

  services: Array<ServiceModel>;

  constructor(public navCtrl: NavController,
              private userStorage: UserStorageProvider,
              private pbServices: PbServicesProvider,
              private sharedFunctions: SharedFunctionsProvider) {
  }

  ionViewDidLoad() {
    //Check if users have a session in the local storage
    this.authenticateUser();
    //Get all services to be rendered
    this.services = this.pbServices.getAllServices();
  }

  authenticateUser() {
  }

}
