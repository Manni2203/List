import HomeScreen from '../Screens/HomeScreen.js/HomeScreen';
import SignIn from '../Screens/SignIn/SignIn';
import SingleListing from '../Screens/SingleListing/SingleListing';
import Initial from '../Screens/initial';

const DefaultStack = [
  {
    name: 'InitialScreen',
    screen: Initial,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    screen: SignIn,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'HomeScreen',
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'SingleListing',
    screen: SingleListing,
    navigationOptions: {
      headerShown: false,
    },
  },
];

const Routes = [...DefaultStack];

export default Routes;
