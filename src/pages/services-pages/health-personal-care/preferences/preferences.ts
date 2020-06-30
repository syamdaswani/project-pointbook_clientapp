import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {SharedFunctionsProvider} from "../../../../providers/shared-functions/shared-functions";

/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {

  @ViewChild('navbar') navBar: Navbar;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sharedFunctions: SharedFunctionsProvider) {
  }

  ionViewDidLoad() {
    this.sharedFunctions.initializeCustomBackButtonClick(this.navBar, this.navCtrl);
  }

}
