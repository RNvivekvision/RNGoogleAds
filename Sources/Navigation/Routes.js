import React from 'react';
import {
  NavigationContainer,
  Theme,
  DarkTheme,
  useTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavConfigs from './NavConfigs';
import NavRoutes from './NavRoutes';
import { GoogleAds, Screens } from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer
      onStateChange={state => {
        // console.log('onStateChange -> ', JSON.stringify(state, null, 2));
      }}>
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        <Stack.Screen name={NavRoutes.Screens} component={Screens} />
        <Stack.Screen name={NavRoutes.GoogleAds} component={GoogleAds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
