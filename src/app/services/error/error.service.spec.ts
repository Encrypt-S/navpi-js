import {inject, TestBed} from '@angular/core/testing';

import {ErrorService} from './error.service';
import {MatSnackBarModule, MatSnackBarModule} from "@angular/material";

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
      ],
      providers: [ErrorService]
    });
  });

  it('should be created', inject([ErrorService], (service: ErrorService) => {
    expect(service).toBeTruthy();
  }));
});
