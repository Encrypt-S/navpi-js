import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {LoginServiceStub} from '../services/login/login.service.stub';
import {LoginService} from '../services/login/login.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedMaterialModule,
      ],
      providers: [
        {provide: LoginService, useClass: LoginServiceStub}
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
