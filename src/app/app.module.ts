import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from "@ionic/storage";
import {UserStorageProvider} from '../providers/local-storage/user-storage';
import {PbPartnersProvider} from '../providers/pb-partners/pb-partners';
import {SharedFunctionsProvider} from '../providers/shared-functions/shared-functions';
import {ChooseDatetimeDurationPageModule} from "../pages/services-pages/health-personal-care/choose-datetime-duration/choose-datetime-duration.module";
import {environment} from "../environments/environment";
import {SendVerificationCodePageModule} from "../pages/signin/send-verification-code/send-verification-code.module";
import {VerifyCodePageModule} from "../pages/signin/verify-code/verify-code.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    ChooseDatetimeDurationPageModule,
    SendVerificationCodePageModule,
    VerifyCodePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserStorageProvider,
    PbPartnersProvider,
    SharedFunctionsProvider,
  ]
})
export class AppModule {}
