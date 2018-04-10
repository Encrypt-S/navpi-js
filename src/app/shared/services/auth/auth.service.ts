import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

import {AuthVO} from './vo/auth.vo';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {rawTokenParser} from '../../parsers/raw-token.parser';
import {AuthModel} from '../../models/auth.model';
import * as _ from 'lodash';


@Injectable()
export class AuthService {


  private _jwtHelper = new JwtHelperService();


  constructor(
    private _httpClient: HttpClient,
    public coreService: CoreService,
    public dataService: DataService,
  ) { }

  async authenticateUser(loginVO: AuthVO) {

    const loginPath = `${this.coreService.apiServerPath}api/user/v1/login`;

    const response = await this._httpClient.post(loginPath, loginVO).toPromise();

    // extract the token and parse it
    const rawToken: string = rawTokenParser(response);
    const authModel: AuthModel = this.extractAuthModelFromToken(rawToken);
    this.dataService.authData = authModel;


    return authModel;

  }


  extractAuthModelFromToken(rawToken: string): AuthModel {

    const authModel: AuthModel = {} as AuthModel;

    authModel.rawToken = rawToken;
    authModel.decodedToken = this._jwtHelper.decodeToken(rawToken);
    authModel.expDate = this._jwtHelper.getTokenExpirationDate(rawToken);

    return authModel;


  }


  isAuthenticated (): boolean {
    let isAuthed = false;

    if (_.has(this.dataService, 'authData.rawToken')) {
      const rawToken = this.dataService.authData.rawToken;

      try {
        isAuthed = !this._jwtHelper.isTokenExpired(rawToken);
      } catch (e) {
        isAuthed = false;
      }
    }


    return isAuthed;

  }




}
