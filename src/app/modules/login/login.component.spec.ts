import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AuthServiceStub} from '../../services/auth/auth.service.stub';
import {AuthService} from '../../services/auth/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../../shared/components/material/shared-material.module';
import {ErrorService} from "../../services/error/error.service";
import {ErrorServiceStub} from "../../services/error/error.service.stub";
import {RouterTestingModule} from "@angular/router/testing";

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
