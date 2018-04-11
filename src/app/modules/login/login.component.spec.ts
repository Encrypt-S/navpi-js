import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../../shared/components/material/shared-material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../shared/services/auth/auth.service';
import {AuthServiceStub} from '../../shared/services/auth/auth.service.stub';
import {ErrorServiceStub} from '../../shared/services/error/error.service.stub';
import {ErrorService} from '../../shared/services/error/error.service';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let usernameEl: DebugElement;
  let passwordEl: DebugElement;
  let submitBtnEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedMaterialModule,
        RouterTestingModule
      ],
      providers: [
        {provide: AuthService, useClass: AuthServiceStub},
        {provide: ErrorService, useClass: ErrorServiceStub}
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    usernameEl = fixture.debugElement.query(By.css('input[formControlName=username]'));
    passwordEl =  fixture.debugElement.query(By.css('input[formControlName=password]'));
    submitBtnEl = fixture.debugElement.query(By.css('button[type=submit]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have username input', () => {
    expect(usernameEl).not.toBeNull();
  });

  it('should have password input', () => {
    expect(passwordEl).not.toBeNull();
  });

  it('should have a submit btn', () => {
    expect(submitBtnEl).not.toBeNull();
  });

  it('submit btn should be disabled by default', () => {
    expect(submitBtnEl.nativeElement.disabled).toBeTruthy();
  });

  it('submit btn should be disabled if only username is populated', () => {
    component.usernameFormCtrl.setValue('user');
    fixture.detectChanges();

    expect(submitBtnEl.nativeElement.disabled).toBeTruthy();
  });

  it('submit btn should be disabled if only password is populated', () => {
    component.passwordFormCtrl.setValue('password');
    fixture.detectChanges();

    expect(submitBtnEl.nativeElement.disabled).toBeTruthy();
  });


  it('submit btn should be enabled form populated', () => {
    component.passwordFormCtrl.setValue('password');
    component.usernameFormCtrl.setValue('user');

    fixture.detectChanges();
    expect(submitBtnEl.nativeElement.disabled).toBeFalsy();
  });

});
