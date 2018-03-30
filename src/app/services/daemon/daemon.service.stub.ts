import { Injectable } from '@angular/core';

@Injectable()
export class DaemonServiceStub {

  isResponding = false;

  constructor(

  ) { }


  isDaemonResponding() {

    return this.isResponding;

  }

}
