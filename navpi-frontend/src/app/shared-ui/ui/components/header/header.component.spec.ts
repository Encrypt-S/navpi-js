import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {MdMenuModule, MdToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../../services/auth/auth.service';
import {AuthServiceStub} from '../../../../../testing/service-stubs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MdToolbarModule,
        MdMenuModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [
        {provide: AuthService, useClass: AuthServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
