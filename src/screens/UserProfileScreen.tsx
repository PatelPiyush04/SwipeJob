import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { UserProfileContent } from "../components/organisms/UserProfileContent";
import { UserProfile } from "../types/user";
import { Button } from "../components/atoms/Button";

type Props = {
  logout: () => void;
};

export const UserProfileScreen: React.FC<Props> = ({ logout }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  // Mock data - in real app, this would come from API/state management
  const profileData: UserProfile = {
    address: {
      formattedAddress: "1 Downing St, Chicago, IL 60654, USA",
      zoneId: "America/Chicago",
    },
    email: "jim.rose@gmail.com",
    firstName: "Jim",
    lastName: "Rose",
    maxJobDistance: 20,
    phoneNumber: "5096290220",
    workerId: "7f90df6e-b832-44e2-b624-3143d428001f",
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <UserProfileContent profile={profileData} />

        <Button title="Log Out" onPress={logout} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});
