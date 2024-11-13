import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/screen';
import SearchScreen from './search/screen';
import ProfileScreen from './profile/screen';

const DashboardScreen = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Search: SearchScreen,
    Profile: ProfileScreen
  },
});

export default DashboardScreen;