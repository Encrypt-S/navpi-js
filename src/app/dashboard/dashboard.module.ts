import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';
import {SharedUIModule} from '../shared-ui/ui/shared-ui.module';
import { NetworkStatusComponent } from './network-status/network-status.component';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartCommonModule, LineChartComponent, NgxChartsModule} from '@swimlane/ngx-charts';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,

    SharedMaterialModule,
    SharedUIModule,

    // Third Pary
    NgxChartsModule,

    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    NetworkStatusComponent,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
