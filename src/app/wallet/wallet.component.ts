import { Component, OnInit } from '@angular/core';
import {WalletService} from '../services/wallet/wallet.service';
import {StakingVo} from '../services/parsers/vo/staking.vo';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  stakeReport: StakingVo;

  constructor(
    private _walletService: WalletService
  ) { }

  async ngOnInit() {
    this.stakeReport = await this._walletService.getStakingReport();
  }

}
