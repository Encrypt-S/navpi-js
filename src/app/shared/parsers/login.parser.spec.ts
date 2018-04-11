import {AuthModel} from '../models/auth.model';
import {loginParser} from './login.parser';

describe('Login Token parser', () => {

  let mockReturnJSON = { data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjMyNjMwNDl9.PyK66bYyE_Fn74kJOy0Z_b3qT7ob3TgJhBXlH-Roq1Q"}

  let userVO: AuthModel;

  beforeEach(() => {
    userVO = loginParser(mockReturnJSON);
  })


  it('user vo should be defined', () => {
    expect(userVO).toBeDefined();
  });

  it('should have the correct token', () => {
    expect(userVO.JWTToken).toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjMyNjMwNDl9.PyK66bYyE_Fn74kJOy0Z_b3qT7ob3TgJhBXlH-Roq1Q");
  });



});


