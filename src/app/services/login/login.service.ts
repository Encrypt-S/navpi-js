import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {LoginVO} from './vo/login.vo';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(
    private _httpClient: HttpClient,
    private _coreService: CoreService,
    private _dataService: DataService,
  ) { }

  async handleLogin(loginVO: LoginVO) {

    const loginPath = `${this._coreService.apiServerPath}/user/v1/login`;

    const response = await this._httpClient.post(loginPath, loginVO).toPromise();

    // TODO: parsed token...
    // this._dataServcie.jwtToken = ...

    return response;

  }

}
