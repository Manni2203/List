import React, {useState} from 'react';
import {StyleSheet, Text, KeyboardAvoidingView} from 'react-native';

import {Input, Button, ErrorText} from '../../Components';
import {userLogin} from '../../Services/UserService';
import {useDispatch} from 'react-redux';
import {UserLogin} from '../../../Store/Actions/UserActions';
import axios from 'axios';
import NavigationService from '../../Services/NavigationServices';
import {setObjectInStore} from '../../Utils/Storage';

const useLoginFormState = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();

  let isUsernameValid = false;
  let isPasswordValid = false;

  if (username === 'example') {
    isUsernameValid = true;
  }

  if (password === 'asdf') {
    isPasswordValid = true;
  }

  return {
    username: {
      value: username,
      set: setUsername,
      valid: isUsernameValid,
    },
    password: {
      value: password,
      set: setPassword,
      valid: isPasswordValid,
    },
    submit: {
      value: submit,
      set: () => {
        setSubmit(true);

        if (isUsernameValid && isPasswordValid) {
          axios
            .post('https://jsonplaceholder.typicode.com/users', {
              username,
              password,
            })
            .then(() => {
              setObjectInStore('logininfo', {username, password});
              dispatch(UserLogin({username, password}));
              NavigationService.resetNavigator('HomeScreen');
            })
            .catch(error => {
              console.log('error', error);
            });
        }
      },
    },
  };
};

export default ({navigation}) => {
  const {username, password, submit} = useLoginFormState({navigation});

  let usernameErrorMsg;
  let passwordErrorMsg;

  if (submit.value && !username.valid) {
    usernameErrorMsg = 'Invalid username.';
  }

  if (submit.value && !password.valid) {
    passwordErrorMsg = 'Invalid password.';
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Input
        label="Username"
        placeholder="enter example here"
        onChangeText={username.set}
        error={usernameErrorMsg}
        testID="SignIn.usernameInput"
      />
      <Input
        label="Password"
        placeholder="enter asdf here"
        secureTextEntry
        onChangeText={password.set}
        error={passwordErrorMsg}
        testID="SignIn.passwordInput"
      />
      <ErrorText messages={[usernameErrorMsg, passwordErrorMsg]} />
      <Button testID="SignIn.Button" text="Login" onPress={submit.set} />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  headerText: {
    color: '#353031',
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 10,
  },
});
