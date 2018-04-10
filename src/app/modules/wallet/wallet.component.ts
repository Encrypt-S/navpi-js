import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../shared/services/wallet/wallet.service';
import {StakingModel} from '../../shared/models/staking.model';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  stakeReport: StakingModel;

  constructor(
    private _walletService: WalletService
  ) { }

  async ngOnInit() {
    this.stakeReport = await this._walletService.getStakingReport();
  }

}
