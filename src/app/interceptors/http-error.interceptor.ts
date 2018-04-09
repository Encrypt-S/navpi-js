import 'rxjs/add/operator/do';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {ErrorService} from '../services/error/error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private _errorService: ErrorService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {

        // There was an issue with calling the http request
        if (err.status === 0) {
          this._errorService.UnknownHTTPError(err);
        }
      }
    });
  }
}
