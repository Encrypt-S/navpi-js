import {inject, TestBed} from '@angular/core/testing';

import {WalletService} from './wallet.service';
import {HttpModule} from '@angular/http';
import {CoreServiceStub} from '../core/core.service.stub';
import {CoreService} from '../core/core.service';
import {StakingVO} from '../parsers/vo/staking.vo';

describe('WalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        WalletService,
        {provide: CoreService, useClass: CoreServiceStub}
      ]
    });
  });

  it('should be created', inject([WalletService], (service: WalletService) => {
    expect(service).toBeTruthy();
  }));

});
