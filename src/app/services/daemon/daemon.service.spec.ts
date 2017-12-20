import { TestBed, inject } from '@angular/core/testing';

import { DaemonService } from './daemon.service';

describe('DaemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaemonService]
    });
  });

  it('should be created', inject([DaemonService], (service: DaemonService) => {
    expect(service).toBeTruthy();
  }));
});
