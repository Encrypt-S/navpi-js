import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {DataService} from '../services/data/data.service';

import * as _ from 'lodash';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public dataService: DataService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if we have a token then we add it to the request
    if (_.has(this.dataService, 'authData.rawToken')) {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.dataService.authData.rawToken}`
        }
      });

    }
    return next.handle(request);
  }
}
