import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components/label";

interface ProfileFieldProps {
  label: string;
  value: string;
}

export const ProfileField: React.FC<ProfileFieldProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text variant="label" style={styles.label}>
        {label}
      </Text>
      <Text variant="body" style={styles.value}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: "#666",
    marginBottom: 4,
  },
  value: {
    color: "#000",
  },
});
