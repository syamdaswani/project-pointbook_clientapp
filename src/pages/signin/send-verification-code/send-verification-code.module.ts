import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendVerificationCodePage } from './send-verification-code';

@NgModule({
  declarations: [
    SendVerificationCodePage,
  ],
  imports: [
    IonicPageModule.forChild(SendVerificationCodePage),
  ],
})
export class SendVerificationCodePageModule {}
