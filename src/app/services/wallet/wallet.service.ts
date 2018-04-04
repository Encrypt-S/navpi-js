import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CoreService} from '../core/core.service';
import 'rxjs/add/operator/map';
import {parseStakingReport} from '../parsers/staking-data.parser';
import {DataService} from '../data/data.service';


@Injectable()
export class WalletService {

  constructor(
    private _http: Http,
    private _coreService: CoreService,
    private _dataService: DataService
  ) { }


  async getStakingReport() {
    const path = `${this._coreService.apiServerPath}/wallet/v1/getstakereport`;

    try {
      const json =  await this._http.get(path).map((res) => res.json()).toPromise();
      this._dataService.stakingData = parseStakingReport(json);

    } catch (e) {

      throw new Error('Error getting stake report');

    }


    return this._dataService.stakingData;


  }



}
