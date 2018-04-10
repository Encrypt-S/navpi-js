import {inject, TestBed} from '@angular/core/testing';

import {TickerService} from './ticker.service';
import {HttpModule} from '@angular/http';

describe('TickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [TickerService]
    });
  });

  it('should be created', inject([TickerService], (service: TickerService) => {
    expect(service).toBeTruthy();
  }));



});
