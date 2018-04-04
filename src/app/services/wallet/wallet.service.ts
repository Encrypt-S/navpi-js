import {Injectable} from '@angular/core';
import {CoreService} from '../core/core.service';
import 'rxjs/add/operator/map';
import {parseStakingReport} from '../parsers/staking-data.parser';
import {DataService} from '../data/data.service';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class WalletService {

  constructor(
    private _http: HttpClient,
    private _coreService: CoreService,
    private _dataService: DataService
  ) { }


  async getStakingReport() {
    const path = `${this._coreService.apiServerPath}/wallet/v1/getstakereport`;

    try {
      const json =  await this._http.get(path).map((res) => res.json().results).toPromise();
      this._dataService.stakingData = parseStakingReport(json);

    } catch (e) {

      throw new Error('Error getting stake report');

    }


    return this._dataService.stakingData;


  }



}
