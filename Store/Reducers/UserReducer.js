import {SET_USER} from '../Actions/Keys';
import {LOGIN_IN, LOG_OUT} from '../Keys';
import DefaultState from './Default';

const INIT_STATE = DefaultState.user;

const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOG_OUT:
      return {...state, userData: null};
    case LOGIN_IN:
      return {...state, userData: action.payload};
    case SET_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

export default UserReducer;
