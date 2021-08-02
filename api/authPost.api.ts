const addTokenIfExists = (options: any, userToken: string) => {
  if (userToken) {
    return {
      ...options,
      headers: {
        ...options.headers,
        Authorization: 'Bearer ' + userToken,
      },
    };
  }
  return options;
};

export function authPost(userToken: string, resource: string, payload: any) {
  let options = {
    url: global.domain + resource,
    method: 'POST',
    data: payload,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };
  options = addTokenIfExists(options, userToken);
  return options;
}

import axios from 'axios';

export const signIn = async ({ id, password }) => {
  const user = { id, password };
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const { data } = await axios.post(`${API}/api/login`, JSON.stringify(user), {
    headers,
  });
  return data;
};
