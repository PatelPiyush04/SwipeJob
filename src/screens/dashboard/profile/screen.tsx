import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { UserProfileScreen } from "../../UserProfileScreen";
import { SignInContext } from "../../../context/auth/context";

export default function ProfileScreen() {
  const { clearWorkerId } = useContext(SignInContext);

  return <UserProfileScreen logout={clearWorkerId} />;
}
