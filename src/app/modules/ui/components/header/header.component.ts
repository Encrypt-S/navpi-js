import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {

  }



  navTo(page) {

    switch (page) {
      case 'login':
        this._router.navigate(['./login']);
        break;

      case 'logout':
        this._router.navigate(['./login']);
        break;
    }

  }

}
