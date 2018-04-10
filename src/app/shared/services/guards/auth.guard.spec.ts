import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {RouterTestingModule, } from "@angular/router/testing";
import {AuthService} from "../auth/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CoreService} from "../core/core.service";
import {DataService} from "../data/data.service";
import {Router} from "@angular/router";


describe('AuthGuard', () => {

  let mockRouter;
  let mockAuthService;
  let authed = false;

  beforeEach(() => {

    mockRouter = {
      navigate: () => {return true}
    };

    mockAuthService = {
      isAuthenticated: () => { return authed}
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthGuard,
        CoreService,
        DataService,
        { provide: AuthService, useValue: mockAuthService},
        { provide: Router, useValue: mockRouter}
      ]
    });
  });

  it('should be injectable', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should NOT activate if user is not authenticated',
    async(inject([AuthGuard, Router], (guard: AuthGuard, router: Router) => {
        // add a spy
        expect(guard.canActivate(null, null)).toBeFalsy();
      })
    ));

  it('should navigate if user is not authenticated',
    async(inject([AuthGuard, Router], (guard: AuthGuard, router: Router) => {
        // add a spy
        spyOn(router, 'navigate');
        guard.canActivate(null, null);
        expect(router.navigate).toHaveBeenCalledWith(['login']);
      })
  ));


  it('should activate if user is not authenticated',
    async(inject([AuthGuard], (guard: AuthGuard) => {
        authed = true;
        expect(guard.canActivate(null, null)).toBeTruthy();
      })
    ));


});
