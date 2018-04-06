import {Injectable} from '@angular/core';
import {StakingVo} from '../parsers/vo/staking.vo';

@Injectable()
export class DataService {

  constructor() { }

  jwtToken: string;
  stakingData: StakingVo;


}
