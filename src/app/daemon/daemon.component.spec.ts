import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DaemonComponent} from './daemon.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('DaemonComponent', () => {
  let component: DaemonComponent;
  let fixture: ComponentFixture<DaemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ DaemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
