import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ErrorService {

  constructor() { }

  UnknownHTTPError(e: HttpErrorResponse) {
    console.warn('ErrorService: UnknownHTTPError: not implemented');
  }


}
