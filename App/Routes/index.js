import React, {useContext} from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Routes from './AppRoutes';
import NavigationService from '../Services/NavigationServices';
import Routes from './AppRoutes';

const Stack = createStackNavigator();

const RoutesAll = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={({route, navigation, theme}) => ({
          headerShown: true,
          cardOverlayEnabled: true,
          headerBackTitleVisible: false,
          presentation: 'card',
        })}>
        {Routes.map(route => {
          return (
            <Stack.Screen
              name={route.name}
              component={route.screen}
              key={route.name}
              options={route.navigationOptions || {}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesAll;
