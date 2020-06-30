import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ServiceModel} from "../../models/ServiceModel";

/*
  Generated class for the PbServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PbServicesProvider {

  constructor(public http: HttpClient) {
  }

  getAllServices(): Array<ServiceModel> {
    //TODO replace all services mock to get from a restful web service
    let allServices: Array<ServiceModel> = new Array();
    let service: ServiceModel = new ServiceModel();

    service.id = 10000;
    service.name = "Swedish";
    service.bgImagePath = "assets/imgs/Desert.jpg";
    allServices.push(service);

    service = new ServiceModel();
    service.id = 10001;
    service.name = "Shiatsu";
    service.bgImagePath = "assets/imgs/Desert.jpg";
    allServices.push(service)

    return allServices;
  }

}
