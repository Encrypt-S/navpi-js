import {Injectable} from '@angular/core';
import {StakingVo} from '../parsers/vo/staking.vo';
import {UserVo} from "../parsers/vo/user.vo";

@Injectable()
export class DataService {

  constructor() { }

  userData: UserVo;
  
  stakingData: StakingVo;


}
