import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {SharedFunctionsProvider} from "../../../providers/shared-functions/shared-functions";
import * as firebase from "firebase";
import {VerifyCodePage} from "../verify-code/verify-code";

/**
 * Generated class for the SendVerificationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-verification-code',
  templateUrl: 'send-verification-code.html',
})
export class SendVerificationCodePage {

  private recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  @ViewChild('navbar') navBar: Navbar;
  @ViewChild('recontainer') recaptchaContainer: ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sharedFunctions: SharedFunctionsProvider,
              private fire: AngularFireAuth) {
  }
  sendVerificationCode(form) {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('re-container',{size: 'normal'});
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + form.value.phoneNumber;
    this.fire.auth.signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then(data => {
        //Removing all elements of recaptcha container div so it will not render when clicking the back button
        while(this.recaptchaContainer.nativeElement.hasChildNodes()){
          this.recaptchaContainer.nativeElement.removeChild(this.recaptchaContainer.nativeElement.lastChild);
        }
        //TODO Verify code page to be a modal
        // this.sharedFunctions.createModal(VerifyCodePage, {}, {'cssClass': 'popupModal'})
        this.sharedFunctions.goToPage( this.navCtrl, 'VerifyCodePage', {confirmationResult: data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  closeModal() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.sharedFunctions.initializeCustomBackButtonClick(this.navBar, this.navCtrl);
  }

}
