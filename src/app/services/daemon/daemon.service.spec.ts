import {inject, TestBed} from '@angular/core/testing';

import {DaemonService} from './daemon.service';
import {WalletServiceStub} from '../wallet/wallet.service.stub';
import {WalletService} from '../wallet/wallet.service';

describe('DaemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaemonService,
        {provide: WalletService, useClass: WalletServiceStub},
      ]
    });
  });

  it('should be created', inject([DaemonService], (service: DaemonService) => {
    expect(service).toBeTruthy();
  }));
});
