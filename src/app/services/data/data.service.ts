import { Injectable } from '@angular/core';
import {StakingVO} from '../parsers/vo/staking.vo';

@Injectable()
export class DataService {

  constructor() { }


  stakingData: StakingVO;


}
