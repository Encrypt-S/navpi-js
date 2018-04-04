import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {LoginVO} from './vo/login.vo';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(
    private _http: HttpClient,
    private _coreService: CoreService,
    private _dataServcie: DataService
  ) { }

  async handleLogin(loginVO: LoginVO) {

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
