import axios from 'axios';
import {getItemFromStorage, getObjectFromStore} from '../Utils/Storage';

export const isLoggedIn = async () => {
  const token = await getObjectFromStore('logininfo');
  if (!token) {
    return false;
  }
  return true;
};
export const UserLoggedIn = async () => {
  const loginDetails = await getObjectFromStore('logininfo');
  if (!loginDetails) {
    return false;
  }
  return true;
};
// export const userLogin = async params => {
//   const response = await axios.post(ApiConfig.loginUrl, params);
//   return response.data;
// };
