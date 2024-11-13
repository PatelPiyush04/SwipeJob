import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../../context/auth/useAuth";

// Why we're using export default?
// Why not just arrow function, can also use const
export default function HomeScreen() {
  const [list, setList] = useState([]);
  const { workerId } = useAuth();

  useEffect(() => {
    const run = async () => {
      const hello = await fetch(
        `https://test.swipejobs.com/api/worker/${workerId}/profile`,
      );

      console.log("hello", hello);
    };

    run();
  }, [workerId]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
