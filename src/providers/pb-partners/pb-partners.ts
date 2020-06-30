import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {PartnerModel} from "../../models/PartnerModel";
import {ServiceModel} from "../../models/ServiceModel";

/*
  Generated class for the PbPartnersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PbPartnersProvider {

  constructor(public http: HttpClient) {
  }

  getPartnersPerService(serviceId: number): Array<PartnerModel> {
    //TODO replace all partners mock to get from a restful web service
    let spaPartners: Array<PartnerModel> = new Array();
    let partner: PartnerModel = new PartnerModel();
    let mockServiceList: Array<ServiceModel> = new Array();
    let mockServiceList2: Array<ServiceModel> = new Array();
    let mockService: ServiceModel = new ServiceModel();

    //Initialize mock service
    mockService.id = 10000;
    mockService.name = "Swedish";
    mockService.bgImagePath = "assets/imgs/Desert.jpg";
    mockServiceList.push(mockService);

    mockService = new ServiceModel();
    mockService.id = 10001;
    mockService.name = "Shiatsu";
    mockService.bgImagePath = "assets/imgs/Desert.jpg";
    mockServiceList.push(mockService)
    mockServiceList2.push(mockService)

    partner.id = 10000;
    partner.name = "Sierra Spa";
    partner.onlineStatus = "Y";
    partner.ratingLifetime = 5;
    partner.city = "Taguig";
    partner.operatingHoursStart = "2:00 PM";
    partner.operatingHoursEnd = "12:00 AM";
    partner.onPromo = "Y";
    partner.services = mockServiceList;
    partner.services.forEach(service => {
      if (service.id === serviceId) {
        spaPartners.push(partner);
      }
    });

    partner = new PartnerModel();
    partner.id = 10001;
    partner.name = "Azul Spa";
    partner.onlineStatus = "N";
    partner.ratingLifetime = 4.5;
    partner.city = "Makati";
    partner.operatingHoursStart = "8:00 AM";
    partner.operatingHoursEnd = "6:00 PM";
    partner.onPromo = "N";
    partner.services = mockServiceList2;

    partner.services.forEach(service => {
      if (service.id === serviceId) {
        spaPartners.push(partner);
      }
    });

    return spaPartners;
  }
}
