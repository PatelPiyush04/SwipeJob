import React from "react";
import { Text, View } from "react-native";

// Why we're using export default?
// Why not just arrow function, can also use const
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}