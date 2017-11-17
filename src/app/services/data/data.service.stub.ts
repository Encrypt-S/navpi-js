import { Injectable } from '@angular/core';
import {StakingVO} from '../parsers/vo/staking.vo';

@Injectable()
export class DataServiceStub {

  stakingData: StakingVO;

  constructor() {

    this.stakingData = {} as StakingVO;
    this.stakingData.graph = [];

  }



}
