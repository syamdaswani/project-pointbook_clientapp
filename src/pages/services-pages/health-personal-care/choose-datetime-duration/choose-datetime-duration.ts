import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {SharedFunctionsProvider} from "../../../../providers/shared-functions/shared-functions";

/**
 * Generated class for the ChooseDatetimeDurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-datetime-duration',
  templateUrl: 'choose-datetime-duration.html',
})
export class ChooseDatetimeDurationPage {

  @ViewChild('navbar') navBar: Navbar;
  appDateTime: String;
  appDuration: number;
  serviceId: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sharedFunctions: SharedFunctionsProvider) {
  }

  ionViewDidLoad() {
    this.serviceId = this.navParams.get('serviceid');
    this.sharedFunctions.initializeCustomBackButtonClick(this.navBar, this.navCtrl);
    this.setPresetValues();
  }

  setPresetValues() {
    //Appointment Date and Time
    const tzoffset = new Date().getTimezoneOffset() * 67500; //offset in milliseconds
    let curDateTime = new Date(Date.now() - tzoffset);
    const nearestHour = new Date(Date.now()-tzoffset).getHours()+Math.round(new Date(Date.now()-tzoffset).getMinutes()/60);
    curDateTime.setHours(nearestHour);
    curDateTime.setMinutes(0);
    this.appDateTime = curDateTime.toISOString().slice(0, -1);

    //Appointment Duration
    this.appDuration = 1.0;
  }

}
