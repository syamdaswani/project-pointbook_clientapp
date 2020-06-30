import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {PbPartnersProvider} from "../../../providers/pb-partners/pb-partners";
import {PartnerModel} from "../../../models/PartnerModel";
import {SharedFunctionsProvider} from "../../../providers/shared-functions/shared-functions";
import {UserStorageProvider} from "../../../providers/local-storage/user-storage";
import {SendVerificationCodePage} from "../../signin/send-verification-code/send-verification-code";
import {PreferencesPage} from "../health-personal-care/preferences/preferences";

@IonicPage()
@Component({
  selector: 'page-select-service-provider',
  templateUrl: 'select-service-provider.html',
})
export class SelectServiceProviderPage {
/**
 * Generated class for the SelectServiceProviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  @ViewChild('navbar') navBar: Navbar;
  partners: Array<PartnerModel>;
  serviceId: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private pbPartners: PbPartnersProvider,
              private sharedFunctions: SharedFunctionsProvider,
              private userStorage: UserStorageProvider,) {
  }

  ionViewDidLoad() {
    this.serviceId = this.navParams.get('serviceid');
    this.sharedFunctions.initializeCustomBackButtonClick(this.navBar, this.navCtrl);
    this.partners = this.pbPartners.getPartnersPerService(this.serviceId);
  }

  checkSignupStatus() {
    console.log(this.userStorage.getPhoneNumber());
    this.userStorage.getPhoneNumber().then(phoneNumber => {
      if(phoneNumber===null) {
        this.sharedFunctions.createModal(SendVerificationCodePage, {}, {'cssClass': 'popupModal'});
      } else {
        this.sharedFunctions.goToPage(this.navCtrl, 'PreferencesPage');
      }
    });
  }

}
