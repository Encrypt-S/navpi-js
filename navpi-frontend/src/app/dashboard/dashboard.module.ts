import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';


@NgModule({
  imports: [
    CommonModule,

    SharedMaterialModule,

    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
