import {Injectable} from '@angular/core';
import {StakingModel} from '../../models/staking.model';
import {AuthModel} from '../../models/auth.model';

@Injectable()
export class DataService {

  constructor() { }

  userData: AuthModel;

  stakingData: StakingModel;


}
