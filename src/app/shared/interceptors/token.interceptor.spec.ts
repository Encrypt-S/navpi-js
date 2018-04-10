import {getTestBed, inject, TestBed} from '@angular/core/testing';


import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TokenInterceptor} from './token.interceptor';
import {DataService} from '../services/data/data.service';
import {HttpHandler, HttpRequest} from "@angular/common/http";

describe('TokenInterceptor', () => {


  let httpMock: HttpTestingController;
  let injector: TestBed;

  const validTestToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuYXZwaS0yLjAuMCIsImlhdCI6MTUyMzMzNzIxNiwiZXhwIjoxNjQ5NTY3NjI4LCJhdWQiOiIiLCJzdWIiOiIifQ.JJr9uhBCAZqazUfyjsfMivCxiFbPum09vWjP-ZBt2ZY';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TokenInterceptor,
        DataService
      ]
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([TokenInterceptor], (interceptor: TokenInterceptor) => {
    expect(interceptor).toBeTruthy();
  }));

  it('should NOT add token if none is store', inject([TokenInterceptor], (interceptor: TokenInterceptor) => {

    let req: HttpRequest = new HttpRequest();
    interceptor.intercept(req, {} as HttpHandler);
    expect(interceptor).toBeTruthy();
  }));


});
