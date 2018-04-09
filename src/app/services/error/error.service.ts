import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class ErrorService {

  constructor(private _snackBar: MatSnackBar) { }

  UnknownHTTPError(e: HttpErrorResponse) {
    console.warn('ErrorService: UnknownHTTPError: not implemented');

    this._snackBar.open('Error connecting to the server - please try agin', 'Ok');

  }


}
