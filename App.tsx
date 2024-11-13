
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboard/screen';
import LoginScreen from './src/screens/login/screen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Dashboard: DashboardScreen,
    Login: LoginScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}