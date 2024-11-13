import React from "react";
import { Alert, Button, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [workerId, setWorkerId] = React.useState<string | undefined>(undefined);

  const handleSignIn = async () => {
    if (!workerId || workerId !== process.env.EXPO_PUBLIC_WORKER_ID) {
      return Alert.alert("Invalid Worker ID", "Please enter a valid worker ID");
    }

    await AsyncStorage.setItem("workerId", workerId);
  };

  const handleGetWorkerId = async () => {
    setWorkerId(process.env.EXPO_PUBLIC_WORKER_ID);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="Worker ID"
        value={workerId}
        onChangeText={setWorkerId}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Get Worker ID" onPress={handleGetWorkerId} />
    </View>
  );
}
