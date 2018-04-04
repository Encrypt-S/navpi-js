import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginVO} from '../services/login/vo/login.vo';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  usernameFormCtrl: FormControl;
  passwordFormCtrl: FormControl;

  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({});

    this.usernameFormCtrl = new FormControl('', Validators.required);
    this.passwordFormCtrl = new FormControl('', Validators.required);

    this.loginForm.addControl('username', this.usernameFormCtrl);
    this.loginForm.addControl('password', this.passwordFormCtrl);

  }

  onSubmit($event) {
    if ($event == null) {
      return;
    }else {
      $event.preventDefault();
    }

    const loginVO: LoginVO = {} as LoginVO;
          loginVO.username = this.usernameFormCtrl.value.toString();
          loginVO.password = this.passwordFormCtrl.value.toString();

    this._loginService.handleLogin(loginVO);
  }

}
