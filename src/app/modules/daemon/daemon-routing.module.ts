import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DaemonComponent} from './daemon.component';
import {DaemonStatusComponent} from './daemon-status/daemon-status.component';

@NgModule({
  imports: [
    RouterModule.forRoot([

      {
        path: 'daemon',
        component: DaemonComponent,

        children: [

          // add the file items component
          {
            path: 'status',
            component: DaemonStatusComponent
          }
        ]
      }


    ])
  ],
  exports: [RouterModule]
})
export class DaemonRouterModule { }
