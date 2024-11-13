
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/screen';
import SearchScreen from './src/screens/search/screen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Search: SearchScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}