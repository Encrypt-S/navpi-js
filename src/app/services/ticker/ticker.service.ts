import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import {parseTicker} from '../parsers/ticker.parser';

@Injectable()
export class TickerService {

  constructor(
    private _http: Http
  ) {

    IntervalObservable.create(30000).subscribe(() => {

      console.log('get');

      this._getTicker();
    });

    this._getTicker();

  }


  private async _getTicker() {

    const path = 'https://api.coinmarketcap.com/v1/ticker/nav-coin/';

    const json =  await this._http.get(path).map((res) => res.json()).toPromise();

    return parseTicker(json);

  }



}
