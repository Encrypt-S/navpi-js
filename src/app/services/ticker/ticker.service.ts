import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TickerService {

  constructor(
    private _http: Http
  ) { }


  private async _getTicker() {

    const path = 'https://api.coinmarketcap.com/v1/ticker/nav-coin/';

    const json =  await this._http.get(path).map((res) => res.json()).toPromise();


    return

  }



}
