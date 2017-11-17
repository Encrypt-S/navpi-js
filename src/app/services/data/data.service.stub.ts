import { Injectable } from '@angular/core';
import {StakingVO} from '../parsers/vo/staking.vo';

@Injectable()
export class DataServiceStub {

  stakingData: StakingVO = {} as StakingVO;

  constructor() {
    this.stakingData.graph = [];
  }



}
