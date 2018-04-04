import {inject, TestBed} from '@angular/core/testing';

import {WalletService} from './wallet.service';
import {HttpModule} from '@angular/http';
import {CoreServiceStub} from '../core/core.service.stub';
import {CoreService} from '../core/core.service';
import {StakingVo} from '../parsers/vo/staking.vo';
import {DataService} from '../data/data.service';
import {DataServiceStub} from '../data/data.service.stub';

describe('WalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        WalletService,
        {provide: CoreService, useClass: CoreServiceStub},
        {provide: DataService, useClass: DataServiceStub}
      ]
    });
  });

  it('should be created', inject([WalletService], (service: WalletService) => {
    expect(service).toBeTruthy();
  }));

});
