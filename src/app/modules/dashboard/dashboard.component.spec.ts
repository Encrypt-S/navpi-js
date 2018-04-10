import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';

import {ScoreCardMockComponent} from '../ui/components/scorecard/mock/scorecard.mock.component';
import {MatCardModule} from '@angular/material';
import {HeaderMockComponent} from '../ui/components/header/mocks/header.component.mock';
import {NetworkStatusMockComponent} from './components/network-status/mock/network-status.mock.component';
import {TickerServiceStub} from '../../services/ticker/ticker.service.stub';
import {TickerService} from '../../services/ticker/ticker.service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
      ],
      providers: [
        {provide: TickerService, useClass: TickerServiceStub},
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
