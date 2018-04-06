import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";

import {WalletService} from './wallet.service';
import {CoreService} from "../core/core.service";
import {CoreServiceStub} from "../core/core.service.stub";
import {DataService} from "../data/data.service";
import {DataServiceStub} from "../data/data.service.stub";


describe('WalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
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
