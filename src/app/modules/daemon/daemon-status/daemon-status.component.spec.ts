import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DaemonStatusComponent} from './daemon-status.component';
import {DaemonService} from '../../../shared/services/daemon/daemon.service';
import {DaemonServiceStub} from '../../../shared/services/daemon/daemon.service.stub';


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
