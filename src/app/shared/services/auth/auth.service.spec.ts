import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AuthVO} from './vo/auth.vo';

describe('AuthService', () => {


  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
        DataService,
        CoreService
      ]
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  describe('authenticateUser()', () => {

    it('should save the jwt', inject([AuthService], (service: AuthService) => {

      const dummyResp = { data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjMyNjMwNDl9.PyK66bYyE_Fn74kJOy0Z_b3qT7ob3TgJhBXlH-Roq1Q"};

      //build the login vo
      const loginVO: AuthVO = {} as AuthVO;
      loginVO.username = 'user';
      loginVO.password = 'password';

      // call the service
      service.authenticateUser(loginVO).then((e) => {
        expect(service.dataService.userData.JWTToken).toEqual(dummyResp.data);
      });

      // call and check
      const req = httpMock.expectOne(`http://127.0.0.1:9002/api/user/v1/login`);
      expect(req.request.method).toBe("POST");
      req.flush(dummyResp);

    }));

  });

});
