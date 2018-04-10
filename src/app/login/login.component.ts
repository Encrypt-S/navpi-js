import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthVO} from '../services/auth/vo/auth.vo';
import {AuthService} from '../services/auth/auth.service';
import {ErrorService} from '../services/error/error.service';
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

  showLoginError: boolean;
  errorMsg: string;

  constructor(
    private _loginService: AuthService,
    private _errorService: ErrorService,
    private _router: Router
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

    //reset the form state
    this.showLoginError = false;

    const loginVO: AuthVO = {} as AuthVO;

      loginVO.username = this.usernameFormCtrl.value.toString();
      loginVO.password = this.passwordFormCtrl.value.toString();

    try {

      await  this._loginService.authenticateUser(loginVO);
      return this._router.navigate(['dashboard'])

    } catch (e) {

      const err: IAppError = this._errorService.getError(e.error);
      if (err.code === LoginError.code) {

        this.showLoginError = true;
        this.errorMsg = err.message;
      }

    }

  }

}
