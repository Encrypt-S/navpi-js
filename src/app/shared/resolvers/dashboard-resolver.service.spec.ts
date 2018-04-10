import {inject, TestBed} from '@angular/core/testing';

import {DashboardResolverService} from './dashboard-resolver.service';
import {WalletService} from '../services/wallet/wallet.service';
import {WalletServiceStub} from '../services/wallet/wallet.service.stub';
import {DaemonService} from '../services/daemon/daemon.service';
import {DaemonServiceStub} from '../services/daemon/daemon.service.stub';
import {RouterTestingModule} from '@angular/router/testing';

describe('DashboardResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        DashboardResolverService,
        {provide: WalletService, useClass: WalletServiceStub},
        {provide: DaemonService, useClass: DaemonServiceStub}
      ]
    });
  });

  it('should be created', inject([DashboardResolverService], (service: DashboardResolverService) => {
    expect(service).toBeTruthy();
  }));
});
