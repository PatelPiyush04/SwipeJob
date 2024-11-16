import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components/label";

interface AvatarProps {
  firstName: string;
  lastName: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  size = 80,
}) => {
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={styles.initials}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    fontSize: 32,
    color: "#666",
    fontWeight: "bold",
  },
});
