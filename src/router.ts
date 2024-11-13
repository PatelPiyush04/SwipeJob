import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./screens/dashboard/screen";
import LoginScreen from "./screens/login/screen";
import {  useIsSignedIn, useIsSignedOut } from "./context/auth/useAuth";

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createNativeStackNavigator({
  screens: {
    LoggedIn: {
      if: useIsSignedIn,
      screen: DashboardScreen
    },
    LoggedOut: {
      if: useIsSignedOut,
      screen: LoginScreen
    },
  },
});

export default createStaticNavigation(RootStack);

