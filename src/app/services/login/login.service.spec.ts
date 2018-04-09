import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {LoginVO} from "./vo/login.vo";

describe('LoginService', () => {


  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        LoginService,
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

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  describe('handleLogin()', () => {

    it('should save the jwt', inject([LoginService], (service: LoginService) => {

      const dummyResp = { data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjMyNjMwNDl9.PyK66bYyE_Fn74kJOy0Z_b3qT7ob3TgJhBXlH-Roq1Q"};

      //build the login vo
      const loginVO: LoginVO = {} as LoginVO;
      loginVO.username = 'user';
      loginVO.password = 'password';

      // call the service
      service.handleLogin(loginVO).then((e) => {
        expect(service.dataService.userData.JWTToken).toEqual(dummyResp.data);
      });

      // call and check
      const req = httpMock.expectOne(`http://127.0.0.1:9002/api/user/v1/login`);
      expect(req.request.method).toBe("POST");
      req.flush(dummyResp);

    }));

  });

});
