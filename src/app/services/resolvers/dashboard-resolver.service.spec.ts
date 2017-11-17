import {inject, TestBed} from '@angular/core/testing';

import {DashboardResolverService} from './dashboard-resolver.service';
import {WalletService} from '../wallet/wallet.service';
import {WalletServiceStub} from '../wallet/wallet.service.stub';

describe('DashboardResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardResolverService,
        {provide: WalletService, useClass: WalletServiceStub}
      ]
    });
  });

  it('should be created', inject([DashboardResolverService], (service: DashboardResolverService) => {
    expect(service).toBeTruthy();
  }));
});
