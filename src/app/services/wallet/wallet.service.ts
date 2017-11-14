import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CoreService} from '../core/core.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {StakingVO} from './vo/staking.vo';


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


        let stakingData: StakingVO = this._parseStakingReport(json);


      });

  }


  _parseStakingReport(rawReportJSON: any): StakingVO {

    const stakingData: StakingVO = {} as StakingVO;

    const  arrayOfKeys = Object.keys(rawReportJSON.result);
    arrayOfKeys.forEach((item) => {

      switch(item) {
        case 'Last 24H':
          stakingData.last7Days
      }


    });

    return stakingData

  }




}
