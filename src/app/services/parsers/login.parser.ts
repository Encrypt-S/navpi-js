import {LoginVO} from '../login/vo/login.vo';

export function parseLogin(rawJSON: any) {

  const d = rawJSON[0];

  let model = {} as LoginVO;

  model.username = d.username;
  model.password = d.password;

  return model;

}
