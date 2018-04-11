import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {WalletModule} from './modules/wallet/wallet.module';
import {DaemonModule} from './modules/daemon/daemon.module';
import {LoginModule} from './modules/login/login.module';
import {CoreService} from './shared/services/core/core.service';
import {WalletService} from './shared/services/wallet/wallet.service';
import {DaemonService} from './shared/services/daemon/daemon.service';
import {AuthService} from './shared/services/auth/auth.service';
import {ErrorService} from './shared/services/error/error.service';
import {DataService} from './shared/services/data/data.service';
import {TickerService} from './shared/services/ticker/ticker.service';
import {DashboardResolverService} from './shared/resolvers/dashboard-resolver.service';
import {HttpErrorInterceptor} from './shared/interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Application Modules
    DashboardModule,
    WalletModule,
    DaemonModule,
    LoginModule,

    AppRoutingModule
  ],
  providers: [

    // SERVICES
    CoreService,
    WalletService,
    DaemonService,
    AuthService,
    ErrorService,

    DataService,
    TickerService,

    // RESOLVERS
    DashboardResolverService,

    // INTERCEPTORS
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
