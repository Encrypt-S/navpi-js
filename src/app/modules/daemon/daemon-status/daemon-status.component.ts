import {Component, OnInit} from '@angular/core';
import {DaemonService} from '../../../shared/services/daemon/daemon.service';


@Component({
  selector: 'app-daemon-status',
  templateUrl: './daemon-status.component.html',
  styleUrls: ['./daemon-status.component.scss']
})

export class DaemonStatusComponent implements OnInit {

  isResponding: Boolean;

  constructor(
    private daemonService: DaemonService
  ) { }

  ngOnInit() {

   this.daemonService.isDaemonResponding().then((e) => {
     this.isResponding = e;
   }).catch((e) => {
     this.isResponding = e;
   });

  }

}
