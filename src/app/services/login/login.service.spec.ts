import {inject, TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {CoreServiceStub} from '../core/core.service.stub';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {DataServiceStub} from '../data/data.service.stub';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        LoginService,
        {provide: CoreService, useClass: CoreServiceStub},
        {provide: DataService, useClass: DataServiceStub}
      ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

});
