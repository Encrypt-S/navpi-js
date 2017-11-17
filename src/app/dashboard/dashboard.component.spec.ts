import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';

import {ScoreCardMockComponent} from '../shared-ui/ui/components/scorecard/mock/scorecard.mock.component';
import {MatCardModule} from '@angular/material';
import {HeaderMockComponent} from '../shared-ui/ui/components/header/mocks/header.component.mock';
import {NetworkStatusMockComponent} from './network-status/mock/network-status.mock.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
      ],
      providers: [

      ],
      declarations: [
        DashboardComponent,
        HeaderMockComponent,
        ScoreCardMockComponent,
        NetworkStatusMockComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
