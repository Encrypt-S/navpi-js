import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';
import {SharedUIModule} from '../shared-ui/ui/shared-ui.module';
import { NetworkStatusComponent } from './network-status/network-status.component';
import {HttpModule} from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,


    SharedMaterialModule,
    SharedUIModule,

    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, NetworkStatusComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
