import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Button, Text, View } from "react-native";
import { UserProfileScreen } from "../../UserProfileScreen";

export default function ProfileScreen() {
  const handleSignOut = () => {
    AsyncStorage.removeItem("workerId");
  };

  // return (
  //   <View>
  //     <Text>Profile</Text>
  //     <Button title="Sign Out" onPress={handleSignOut} />
  //   </View>
  // );
  return <UserProfileScreen />;
}
