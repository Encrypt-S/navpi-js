import {IAppError} from './app-error.interface';


export class LoginError implements IAppError {

  code = 'LOGIN_ERROR';
  message = 'Your username and/or password is wrong';
  meta = null

}

