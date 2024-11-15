import React, { useContext } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { SignInContext } from "../../context/auth/context";

export default function LoginScreen() {
  const [inputWorkerId, setInputWorkerId] = React.useState<
    string | undefined
  >();
  const { setWorkerId } = useContext(SignInContext);

  const handleSignIn = async () => {
    if (!inputWorkerId || inputWorkerId !== process.env.EXPO_PUBLIC_WORKER_ID) {
      return Alert.alert("Invalid Worker ID", "Please enter a valid worker ID");
    }
    setWorkerId(inputWorkerId);
  };

  const handleGetWorkerId = async () => {
    setInputWorkerId(process.env.EXPO_PUBLIC_WORKER_ID);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="Worker ID"
        value={inputWorkerId}
        onChangeText={setInputWorkerId}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Get Worker ID" onPress={handleGetWorkerId} />
    </View>
  );
}
