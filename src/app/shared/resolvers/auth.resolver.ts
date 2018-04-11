import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {WalletService} from '../services/wallet/wallet.service';
import {DaemonService} from '../services/daemon/daemon.service';

@Injectable()
export class DashboardResolverService implements Resolve<any>{

  constructor (
    private _walletService: WalletService,
    private _daemonsService: DaemonService,
    private _router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return new Observable((observer: Subscriber<any>) => {


      observer.next();
      observer.complete();

      /*

      // first check to see that the daemon service is operational
      this._daemonsService.isDaemonResponding()
        .then((responding: boolean) => {
          if (responding) {
            observer.next();
            observer.complete();
          }else {
            // observer.next();
            // observer.complete();
            this._router.navigate(['daemon/status']);
            observer.error('');
          }

        }).catch((e) => {

          observer.error('');

        });
        */


      // this._walletService.authenticateUser().then((d) => {
      //
      //   observer.next();
      //   observer.complete();
      //
      // }).catch((e) => {
      //
      //   debugger
      //   console.log('sdf');
      //
      // });



    });
  }
}
