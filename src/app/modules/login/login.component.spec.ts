import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../../shared/components/material/shared-material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../shared/services/auth/auth.service';
import {AuthServiceStub} from '../../shared/services/auth/auth.service.stub';
import {ErrorServiceStub} from '../../shared/services/error/error.service.stub';
import {ErrorService} from '../../shared/services/error/error.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
