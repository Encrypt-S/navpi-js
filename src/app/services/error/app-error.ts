import {error} from 'util';


export const appErrors = {

  LOGIN_ERROR: {
    name: 'LOGIN_ERROR',
    message: 'Your username and/or password is wrong'
  } as IError

};


export interface IError {
  code: string;
  message: string;
}


export class AppError {

  constructor(
    readonly err: IError,
  ) {}

}
