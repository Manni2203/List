import {GET_USER, LOG_OUT, LOGIN_IN} from './Keys';

export const userLogout = () => ({
  type: LOG_OUT,
});

export function UserLogin(data) {
  return {
    type: LOGIN_IN,
    payload: data,
  };
}
