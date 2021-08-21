import {Injectable} from '@angular/core';
import {ProductData} from "../models";
import {data} from "../data/api-data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _data: ProductData[];

  constructor() {
    this._data = data;
  }

  get allData(): ProductData[] {
    return this._data;
  }
}
