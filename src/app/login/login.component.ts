import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginVO} from '../services/login/vo/login.vo';
import {LoginService} from '../services/login/login.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorService} from '../services/error/error.service';
import {AppError, appErrors} from '../services/error/app-error';
import {IAppError} from '../services/error/app-error.interface';
import {LoginError} from '../services/error/errors/login-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  usernameFormCtrl: FormControl;
  passwordFormCtrl: FormControl;

  constructor(
    private _loginService: LoginService,
    private _errorService: ErrorService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({});

    this.usernameFormCtrl = new FormControl('', Validators.required);
    this.passwordFormCtrl = new FormControl('', Validators.required);

    this.loginForm.addControl('username', this.usernameFormCtrl);
    this.loginForm.addControl('password', this.passwordFormCtrl);

  }

  async onSubmit($event: Event) {

    if ($event == null) { return; } else {$event.preventDefault();}

    const loginVO: LoginVO = {} as LoginVO;
          loginVO.username = this.usernameFormCtrl.value.toString();
          loginVO.password = this.passwordFormCtrl.value.toString();

    try {

      await  this._loginService.handleLogin(loginVO);

    } catch (e: HttpErrorResponse) {

      const err: IAppError = this._errorService.getError(e.error);
      if (err.code === LoginError.code) {
        console.log("showlogin error")
      }

    }

  }

}
