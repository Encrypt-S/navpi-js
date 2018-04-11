import {AuthModel} from '../models/auth.model';

export function loginParser(rawReportJSON: any): AuthModel {

  const userVO: AuthModel = {} as AuthModel;

  userVO.JWTToken = rawReportJSON.data;

  return userVO;

}


