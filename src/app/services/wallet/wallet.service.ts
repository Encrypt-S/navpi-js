import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CoreService} from '../core/core.service';
import 'rxjs/add/operator/map';
import {StakingVO} from '../parsers/vo/staking.vo';
import {parseStakingReport} from '../parsers/staking-data.parser';


@Injectable()
export class WalletService {

  constructor(
    private _http: Http,
    private _coreService: CoreService
  ) { }


  async getStakingReport() {

    const path = `${this._coreService.apiServerPath}/wallet/v1/getstakereport`;

    return await this._http.get(path)
      .map((res) => res.json())
      .subscribe((json: any) => {

        const stakingData: StakingVO = parseStakingReport(json);

      });

  }





}
