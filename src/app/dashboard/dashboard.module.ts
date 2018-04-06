import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';
import {SharedUIModule} from '../shared-ui/ui/shared-ui.module';
import {NetworkStatusComponent} from './network-status/network-status.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,

    SharedMaterialModule,
    SharedUIModule,

    // Third Pary
    NgxChartsModule,

    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    NetworkStatusComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
