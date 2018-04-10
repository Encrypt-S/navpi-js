import {AuthModel} from '../models/auth.model';
import {rawTokenParser} from './raw-token.parser';

describe('Raw Token parser', () => {

  const mockReturnJSON = { data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjMyNjMwNDl9.PyK66bYyE_Fn74kJOy0Z_b3qT7ob3TgJhBXlH-Roq1Q'};

  let rawToken: string;

  beforeEach(() => {
    rawToken = rawTokenParser(mockReturnJSON);
  })


  it('user vo should be defined', () => {
    expect(rawToken).toBeDefined();
  });

  it('should have the correct token', () => {
    expect(rawToken).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjMyNjMwNDl9.PyK66bYyE_Fn74kJOy0Z_b3qT7ob3TgJhBXlH-Roq1Q');
  });



});


