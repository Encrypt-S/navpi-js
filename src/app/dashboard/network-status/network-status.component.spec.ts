import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NetworkStatusComponent} from './network-status.component';
import {ScoreCardMockComponent} from '../../shared-ui/ui/components/scorecard/mock/scorecard.mock.component';
import {MatCardModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {DataService} from '../../services/data/data.service';
import {DataServiceStub} from '../../services/data/data.service.stub';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('NetworkStatusComponent', () => {
  let component: NetworkStatusComponent;
  let fixture: ComponentFixture<NetworkStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        NgxChartsModule
      ],
      providers: [
        {provide: DataService, useClass: DataServiceStub}
      ],
      declarations: [
        NetworkStatusComponent,

        ScoreCardMockComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
