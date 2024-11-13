import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/screen';
import SearchScreen from './search/screen';

const DashboardScreen = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Profile: SearchScreen,
  },
});

export default DashboardScreen;