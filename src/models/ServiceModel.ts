export class ServiceModel {
  private _id: number;
  private _name: string;
  private _bgImagePath: string;

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

  get bgImagePath(): string {
    return this._bgImagePath;
  }
  set bgImagePath(value: string) {
    this._bgImagePath = value;
  }
}
