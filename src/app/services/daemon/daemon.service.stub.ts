import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DaemonServiceStub {

  isResponding = false;

  constructor(

  ) { }


  isDaemonResponding() {

    return new Observable().toPromise();

  }

}
