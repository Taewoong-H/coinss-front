import axios from 'axios';
import cookie from 'react-cookies';
import { HTTP_ONLY } from '../config/config';

function setToken(accessToken: string, refreshToken: string) {
  axios.defaults.headers.Authorization = 'Bearer ' + accessToken;

  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24);

  cookie.save('accessToken', accessToken, {
    path: '/',
    expires,
    httpOnly: HTTP_ONLY, // dev/prod 에 따라 true / false 로 받게 했다.
  });
  cookie.save('refreshToken', refreshToken, {
    path: '/',
    expires,
    httpOnly: HTTP_ONLY,
  });
}

export { setToken };
