import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AuthVO} from './vo/auth.vo';
import {AuthModel} from '../../models/auth.model';

describe('AuthService', () => {


  let httpMock: HttpTestingController;
  let injector: TestBed;

  const validTestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuYXZwaS0yLjAuMCIsImlhdCI6MTUyMzMzNzIxNiwiZXhwIjoxNjQ5NTY3NjI4LCJhdWQiOiIiLCJzdWIiOiIifQ.JJr9uhBCAZqazUfyjsfMivCxiFbPum09vWjP-ZBt2ZY';
  const expiredTestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuYXZwaS0yLjAuMCIsImlhdCI6MTUyMzMzNzIxNiwiZXhwIjo5NTUzNDM2MjgsImF1ZCI6IiIsInN1YiI6IiJ9.OMNcjmpa1s4aWYpo5dylJ94zRqR01kvXuo6WLUOxF5E';

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

      const dummyResp = { data: validTestToken};

      //build the login vo
      const loginVO: AuthVO = {} as AuthVO;
      loginVO.username = 'user';
      loginVO.password = 'password';

      // call the service
      service.authenticateUser(loginVO).then((e) => {
        expect(service.dataService.authData.rawToken).toEqual(validTestToken);
      });

      // call and check
      const req = httpMock.expectOne(`http://127.0.0.1:9002/api/user/v1/login`);
      expect(req.request.method).toBe('POST');
      req.flush(dummyResp);

    }));

  });


  describe('isAuthenticated()', () => {

    describe('dataService authModel types', () => {

      it('should NOT authenticate if data service is null', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = null;
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel is a string', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = "";
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel is a number', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = 234234;
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel is true', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = true;
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel is false', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = true;
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel is an array', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = true;
        expect(service.isAuthenticated()).toEqual(false);
      }));


      it('should NOT authenticate if authModel is an object', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {};
        expect(service.isAuthenticated()).toEqual(false);
      }));

    });

    describe('authModel rawToken data types', () => {

      it('should NOT authenticate if authModel rawToken undedined', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {} as AuthModel;
        expect(service.isAuthenticated()).toEqual(false);
      }));


      it('should NOT authenticate if authModel rawToken is an empty string', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {} as AuthModel;
        service.dataService.authData.rawToken = '';
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel rawToken is a number', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {} as AuthModel;
        service.dataService.authData.rawToken = 33333;
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel rawToken is true', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {} as AuthModel;
        service.dataService.authData.rawToken = true;
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel rawToken is false', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {} as AuthModel;
        service.dataService.authData.rawToken = false;
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel rawToken is an array', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {} as AuthModel;
        service.dataService.authData.rawToken = [];
        expect(service.isAuthenticated()).toEqual(false);
      }));

      it('should NOT authenticate if authModel rawToken is an object', inject([AuthService], (service: AuthService) => {
        service.dataService.authData = {} as AuthModel;
        service.dataService.authData.rawToken = {};
        expect(service.isAuthenticated()).toEqual(false);
      }));

    });



    it('should NOT authenticate if authModel rawToken is empty string', inject([AuthService], (service: AuthService) => {
      service.dataService.authData = {} as AuthModel;
      service.dataService.authData.rawToken = '';
      expect(service.isAuthenticated()).toEqual(false);
    }));


    it('should NOT authenticate if token is malformed', inject([AuthService], (service: AuthService) => {
      service.dataService.authData = {} as AuthModel;
      service.dataService.authData.rawToken = 'sadkfjhasdkfhjaskdjfh.asdkfjjhhasdkjfhaskdjf373.asdfasdfasdfasdf';
      expect(service.isAuthenticated()).toEqual(false);
    }));

    it('should NOT authenticate if token has expired', inject([AuthService], (service: AuthService) => {
      service.dataService.authData = {} as AuthModel;
      service.dataService.authData.rawToken = expiredTestToken;
      expect(service.isAuthenticated()).toEqual(false);
    }));


    it('should authenticate if is valid', inject([AuthService], (service: AuthService) => {
      service.dataService.authData = {} as AuthModel;
      service.dataService.authData.rawToken = validTestToken;
      expect(service.isAuthenticated()).toEqual(true);
    }));



  });




  });
