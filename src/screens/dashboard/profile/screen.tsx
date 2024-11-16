import React, { useContext } from "react";
import { SignInContext } from "../../../context/auth/context";
import { useAuth } from "../../../context/auth/useAuth";
import useQuery from "../../../hooks/useQuery";
import { UserProfile as UserProfileType } from "../../../types/user";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { UserProfile } from "./UserProfile";

export default function ProfileScreen() {
  const { clearWorkerId } = useContext(SignInContext);
  const { workerId } = useAuth();
  const [refreshing, setRefreshing] = React.useState(false);

  const { data: UserProfileData, isLoading } = useQuery<UserProfileType>(
    `worker/${workerId}/profile`,
  );

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
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <UserProfile profile={UserProfileData} onLogout={clearWorkerId} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
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
