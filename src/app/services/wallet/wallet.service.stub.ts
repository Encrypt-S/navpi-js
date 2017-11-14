import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WalletServiceStub {

  constructor(

  ) { }

  getStakingReport() {
    return true;
  }

}
