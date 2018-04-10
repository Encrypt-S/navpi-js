import {IAppError} from '../app-error.interface';


export const LoginError: IAppError = {

  code: 'LOGIN_ERROR',
  message: 'Your username and/or password is wrong',
  meta: null

} as IAppError;

