import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardResolverService} from '../../shared/resolvers/dashboard-resolver.service';


// import {AuthGuard} from '../services/auth/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([

      {
        path: 'dashboard',
        component: DashboardComponent,
        resolve: {
          dashResolve: DashboardResolverService
        }
        // canActivate: [AuthGuard],
      },



    ])
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
