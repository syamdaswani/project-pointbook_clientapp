import {ServiceModel} from "./ServiceModel";

export class PartnerModel {
  private _id: number;
  private _name: string;
  private _onlineStatus: string;
  private _ratingLifetime: number;
  private _city: string;
  private _operatingHoursStart: string;
  private _operatingHoursEnd: string;
  private _onPromo: string;
  private _services: Array<ServiceModel>;

  constructor() {
  }

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get onlineStatus(): string {
    return this._onlineStatus;
  }
  set onlineStatus(value: string) {
    this._onlineStatus = value;
  }

  get ratingLifetime(): number {
    return this._ratingLifetime;
  }
  set ratingLifetime(value: number) {
    this._ratingLifetime = value;
  }

  get city(): string {
    return this._city;
  }
  set city(value: string) {
    this._city = value;
  }

  get operatingHoursStart(): string {
    return this._operatingHoursStart;
  }
  set operatingHoursStart(value: string) {
    this._operatingHoursStart = value;
  }

  get operatingHoursEnd(): string {
    return this._operatingHoursEnd;
  }
  set operatingHoursEnd(value: string) {
    this._operatingHoursEnd = value;
  }

  get onPromo(): string {
    return this._onPromo;
  }
  set onPromo(value: string) {
    this._onPromo = value;
  }

  get services(): Array<ServiceModel> {
    return this._services;
  }
  set services(value: Array<ServiceModel>) {
    this._services = value;
  }
}
