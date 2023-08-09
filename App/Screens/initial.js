import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {isLoggedIn} from '../Services/UserService';
import {UserLogin} from '../../Store/Actions/UserActions';
import {useDispatch} from 'react-redux';
import {getItemFromStorage, getObjectFromStore} from '../Utils/Storage';

const Initial = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    isUserLogin();
  }, []);

  const isUserLogin = async () => {
    const isUserLoggedIn = await isLoggedIn();
    const userName = await getObjectFromStore('logininfo');
    dispatch(UserLogin(userName));
    if (!isUserLoggedIn) {
      goToNextScreen('Login');
      return;
    }
    goToNextScreen('HomeScreen');
  };

  const goToNextScreen = async nextScreen => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: nextScreen}],
      }),
    );
  };
  return <View />;
};

export default Initial;
