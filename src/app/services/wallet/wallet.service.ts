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

        const stakingData: StakingVO = this._parseStakingReport(json);

      });

  }


  _parseStakingReport(rawReportJSON: any): StakingVO {

    const stakingData: StakingVO = {} as StakingVO;

    const result = rawReportJSON.result;

    const  arrayOfKeys = Object.keys(result);
    arrayOfKeys.forEach((key) => {

      switch (key) {
        case 'Last 24H':
          stakingData.last24Hour = parseFloat(result[key]);
          break;

        case 'Last 7 Days':
          stakingData.last7Days = parseFloat(result[key]);
          break;

        case 'Last 30 Days':
          stakingData.last30Days = parseFloat(result[key]);
          break;

        case 'Last 365 Days':
          stakingData.last365Days = parseFloat(result[key]);
          break;

        case 'Latest Time':
          stakingData.latestTime = new Date(result[key]);
          break;

        case 'Stake counted':
          stakingData.stakeCounted = parseFloat(result[key]);
          break;

        case 'time took (ms)':
          stakingData.timeTaken = parseFloat(result[key]);
          break;

      }


    });

    console.log(stakingData);
    return stakingData;

  }




}
