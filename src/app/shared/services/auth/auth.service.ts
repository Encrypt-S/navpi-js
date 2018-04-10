import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {AuthVO} from './vo/auth.vo';
import {CoreService} from '../core/core.service';
import {DataService} from '../data/data.service';
import {HttpClient} from '@angular/common/http';
import {loginParser} from '../../parsers/login.parser';


@Injectable()
export class AuthService {

  constructor(
    private _httpClient: HttpClient,
    public coreService: CoreService,
    public dataService: DataService,
  ) { }

  async authenticateUser(loginVO: AuthVO) {

    const loginPath = `${this.coreService.apiServerPath}api/user/v1/login`;

    const response = await this._httpClient.post(loginPath, loginVO).toPromise();

    this.dataService.userData = loginParser(response);

    return response;

  }


  isAuthenticated () {

  }

}
