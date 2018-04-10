import {Injectable} from '@angular/core';
import {StakingModel} from '../../models/staking.model';

@Injectable()
export class DataServiceStub {

  stakingData: StakingModel;

  constructor() {

    this.stakingData = {} as StakingModel;
    this.stakingData.graph = [];

  }



}
