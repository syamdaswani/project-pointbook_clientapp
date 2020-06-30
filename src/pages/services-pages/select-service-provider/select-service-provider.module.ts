import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SelectServiceProviderPage} from "./select-service-provider";
import {Ionic2RatingModule} from "ionic2-rating";
import {PbPartnersProvider} from "../../../providers/pb-partners/pb-partners";

@NgModule({
  declarations: [
    SelectServiceProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectServiceProviderPage),
    Ionic2RatingModule,
  ],
  providers:[PbPartnersProvider],
})
export class SelectServiceProviderPageModule {}
