import {Injectable} from '@angular/core';
import {StakingVo} from '../../parsers/vo/staking.vo';

@Injectable()
export class DataServiceStub {

  stakingData: StakingVo;

  constructor() {

    this.stakingData = {} as StakingVo;
    this.stakingData.graph = [];

  }



}
