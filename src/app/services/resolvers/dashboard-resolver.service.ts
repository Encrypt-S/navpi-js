import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {WalletService} from '../wallet/wallet.service';

@Injectable()
export class DashboardResolverService implements Resolve<any>{

  constructor (
    private _walletService: WalletService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return new Observable((observer: Subscriber<any>) => {


      this._walletService.getStakingReport().then((d) => {

        observer.next();
        observer.complete();

      });



    });
  }
}
