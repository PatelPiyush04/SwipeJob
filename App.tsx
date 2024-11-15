import * as React from "react";
import { SignInContext } from "./src/context/auth/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Router from "./src/router";

export default function App() {
  const [workerId, setWorkerId] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const run = async () => {
      const storageWorkerId = await AsyncStorage.getItem("workerId");
      if (storageWorkerId) {
        setWorkerId(storageWorkerId);
      }
    };
    run();
  }, []);

  const handleSetWorkerId = async (workerId: string) => {
    await AsyncStorage.setItem("workerId", workerId);
    setWorkerId(workerId);
  };

  const clearWorkerId = async () => {
    await AsyncStorage.removeItem("workerId");
    setWorkerId(undefined);
  };

  return (
    <SignInContext.Provider
      value={{ workerId, setWorkerId: handleSetWorkerId, clearWorkerId }}
    >
      <Router />
    </SignInContext.Provider>
  );
}
