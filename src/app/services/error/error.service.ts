import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import * as  _ from 'lodash';
import {AppError, appErrors, IError} from './app-error';


@Injectable()
export class ErrorService {

  constructor(private _snackBar: MatSnackBar) { }

  unknownHTTPError(e: HttpErrorResponse) {
    console.warn('ErrorService: unknownHTTPError: not implemented');

    this._snackBar.open('Error connecting to the server - please try again', 'Ok');

  }


  getError(errors: any) {

    let err: any = errors[0];
    const error: IError = appErrors[err.code] as IError;

    const appError = new AppError(error);

    return appError;
  }




}
