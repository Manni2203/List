import React, {useState, useEffect, useRef} from 'react';
import {View, AppState, Text} from 'react-native';
import {store} from '../Store';
import {Provider} from 'react-redux';
import axios from 'axios';
import {Navigation} from 'react-native-navigation';
import SignIn from './Screens/SignIn/SignIn';
import Routes from './Routes';
import RoutesAll from './Routes';

// import 'react-native-gesture-handler';
// import Routes from './Routes';
// import { AppContextProvider } from "./AppContext"

axios.interceptors.request.use(
  async config => {
    let request = config;
    request.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (request?.data?._parts) {
      (request.headers['Content-Type'] =
        'multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'),
        (request.headers['Accept'] = '*/*');
    }
    request.url = config.url;
    return request;
  },
  error => {
    return error;
  },
);

const App = props => {
  // useEffect(() => {
  //   Navigation.push('SignIn');
  // }, []);
  return (
    <Provider store={store}>
      <RoutesAll />
    </Provider>
  );
};

export default App;
