import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';
import {SharedUIModule} from '../shared-ui/ui/shared-ui.module';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DaemonComponent} from './daemon.component';
import {DaemonRouterModule} from './daemon-routing.module';
import { DaemonStatusComponent } from './daemon-status/daemon-status.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,

    SharedMaterialModule,
    SharedUIModule,


    DaemonRouterModule
  ],
  declarations: [
    DaemonComponent,
    DaemonStatusComponent,
  ],
  exports: [DaemonComponent]
})
export class DaemonModule { }
