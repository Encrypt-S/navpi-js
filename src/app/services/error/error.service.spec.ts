import {inject, TestBed} from '@angular/core/testing';

import {ErrorService} from './error.service';
import {SharedMaterialModule} from "../../shared-ui/material/shared-material.module";

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedMaterialModule,
      ],
      providers: [ErrorService]
    });
  });

  it('should be created', inject([ErrorService], (service: ErrorService) => {
    expect(service).toBeTruthy();
  }));
});
