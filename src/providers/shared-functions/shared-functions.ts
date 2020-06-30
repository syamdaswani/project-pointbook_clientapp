import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertButton, AlertController, ModalController, ModalOptions, Navbar, NavController} from "ionic-angular";
import {Page} from "ionic-angular/navigation/nav-util";

/*
  Generated class for the SharedFunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedFunctionsProvider {

  constructor(public http: HttpClient,
              private modalCtrl: ModalController) {
  }

  goToPage(navCtrl: NavController, page: string, navParams?: any) {
    const navOptions = {
      animation: 'ios-transition'
    };
    navCtrl.push(page, navParams, navOptions);
  }

  createAlert(alertCtrl: AlertController, title?: string,
              message?: string, buttons?: (AlertButton | string)[]) {
    let alert = alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons
    });
    alert.present();
  }

  createModal(page: Page, modalParams: any, modalOpts: ModalOptions) {
    let customModal = this.modalCtrl.create(page, modalParams, modalOpts);
    customModal.present();
  }

  initializeCustomBackButtonClick(navBar: Navbar, navCtrl: NavController) {
    //TODO find a way to put this function under one source code
    navBar.backButtonClick = () => {
      const navOptions = {
        animation: 'ios-transition'
      };
      navCtrl.pop(navOptions);
    };
  }

}
