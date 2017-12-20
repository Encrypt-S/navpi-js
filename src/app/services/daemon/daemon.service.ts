import { Injectable } from '@angular/core';
import {WalletService} from '../wallet/wallet.service';

@Injectable()
export class DaemonService {

  isResponding = false;

  constructor(
    private _walletService: WalletService
  ) { }


  async isDaemonResponding() {

    try {
      await this._walletService.getStakingReport();
      this.isResponding = true;
      return true;

    } catch (e) {
      this.isResponding = false;
      return false;
    }

  }

}
