import { Injectable } from '@angular/core';
import {Datas} from './data'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public datas : Datas = 
    {
      cookie1:true,
      cookie2:true,
      cookie3:true,
      cookie4:true,
      cookie5:true
    };

  }
