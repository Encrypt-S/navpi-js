import {UserVo} from './vo/user.vo';

export function loginParser(rawReportJSON: any): UserVo {

  const userVO: UserVo = {} as UserVo;

  userVO.JWTToken = rawReportJSON.data;

  return userVO;

}


