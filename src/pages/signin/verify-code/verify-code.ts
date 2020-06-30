import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import * as firebase from "firebase";
import {SharedFunctionsProvider} from "../../../providers/shared-functions/shared-functions";
import {UserStorageProvider} from "../../../providers/local-storage/user-storage";

/**
 * Generated class for the VerifyCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-code',
  templateUrl: 'verify-code.html',
})
export class VerifyCodePage {

  private confirmationResult: any;
  private verificationCode: number;
  @ViewChild('navbar') navBar: Navbar;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sharedFunctions: SharedFunctionsProvider,
              private userStorage: UserStorageProvider) {
    this.confirmationResult = this.navParams.get('confirmationResult');
  }

  verifyCode(form) {
    const credential = firebase.auth.PhoneAuthProvider.credential(this.confirmationResult.verificationId, form.value.verificationCode);
    firebase.auth().signInWithCredential(credential)
      .then(user => {
        this.userStorage.setPhoneNumber(user.phoneNumber);
      })
      .catch(err => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    this.sharedFunctions.initializeCustomBackButtonClick(this.navBar, this.navCtrl);
  }

}
