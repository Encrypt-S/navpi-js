import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';

import {ScoreCardComponentMock} from '../shared-ui/ui/components/scorecard/mock/scorecard.component.mock';
import {MatCardModule} from '@angular/material';
import {HeaderComponentMock} from '../shared-ui/ui/components/header/mocks/header.component.mock';


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
        HeaderComponentMock,
        ScoreCardComponentMock
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
