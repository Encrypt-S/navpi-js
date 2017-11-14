import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class CoreService {

  constructor() { }

  get apiServerPath(): string {

    return `${environment.apiServer.path}:${environment.apiServer.port}/`;

  }

}
