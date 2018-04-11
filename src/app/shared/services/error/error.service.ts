import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {LoginError} from './errors/login-error';
import {IAppError} from './app-error.interface';


@Injectable()
export class ErrorService {

  constructor(private _snackBar: MatSnackBar) { }

  unknownHTTPError(e: HttpErrorResponse) {
    console.warn('ErrorService: unknownHTTPError: not implemented');

    this._snackBar.open('Error connecting to the server - please try again', 'Ok');

  }


  getError(errors: any): IAppError {

    const err: any = errors.errors[0];

    let rtnErr: IAppError = null;

    switch (err.code) {
      case LoginError.code:
        rtnErr = LoginError;
        break;
    }

    return rtnErr;

  }




}
