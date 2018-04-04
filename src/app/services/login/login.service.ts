import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {LoginVO} from './vo/login.vo';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';


@Injectable()
export class LoginService {

  constructor(
    private _http: Http,
    private _coreService: CoreService,
    private _dataServcie: DataService
  ) { }


  async handleLogin(loginVO: LoginVO) {
    debugger;

    const path = `${this._coreService.apiServerPath}/user/v1/login`;
    try {
      const json =  await this._http.post(path, loginVO).map((res) => res.json()).toPromise();
      // this._dataServcie.jwtToken =  //parsed oken

    } catch (e) {

      throw new Error('Error getting stake report');

    }

    //
    // return this._dataService.stakingData;


  }



}
