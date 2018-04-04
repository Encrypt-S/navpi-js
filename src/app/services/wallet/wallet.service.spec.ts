import {inject, TestBed} from '@angular/core/testing';

import {WalletService} from './wallet.service';
import {CoreServiceStub} from '../core/core.service.stub';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {DataServiceStub} from '../data/data.service.stub';
import {HttpClientModule} from '@angular/common/http';

describe('WalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
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
