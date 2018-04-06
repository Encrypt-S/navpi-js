import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DaemonStatusComponent} from './daemon-status.component';
import {DaemonService} from '../../services/daemon/daemon.service';
import {DaemonServiceStub} from '../../services/daemon/daemon.service.stub';
import {RouterTestingModule} from "@angular/router/testing";

describe('DaemonStatusComponent', () => {
  let component: DaemonStatusComponent;
  let fixture: ComponentFixture<DaemonStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ DaemonStatusComponent ],
      providers: [
        {provide: DaemonService, useClass: DaemonServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
