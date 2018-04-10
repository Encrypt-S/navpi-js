import {HttpClient} from '@angular/common/http';
import {StakingVo} from '../../parsers/vo/staking.vo';
import {parseStakingReport} from '../../parsers/staking-data.parser';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {Injectable} from '@angular/core';

@Injectable()
export class WalletService {

  constructor(
    private _httpClient: HttpClient,
    private _coreService: CoreService,
    private _dataService: DataService,
  ) { }

  async getStakingReport(): Promise<StakingVo> {

    const reportPath = `${this._coreService.apiServerPath}/wallet/v1/getstakereport`;

    const response = await this._httpClient.get(reportPath).toPromise();

    this._dataService.stakingData = parseStakingReport(response);

    return this._dataService.stakingData;

  }

}
