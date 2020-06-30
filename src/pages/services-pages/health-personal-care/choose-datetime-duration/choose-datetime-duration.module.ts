import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseDatetimeDurationPage } from './choose-datetime-duration';

@NgModule({
  declarations: [
    ChooseDatetimeDurationPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseDatetimeDurationPage),
  ],
})
export class ChooseDatetimeDurationPageModule {}
