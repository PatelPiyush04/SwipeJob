import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components/label";

interface JobDetailProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export const JobDetail: React.FC<JobDetailProps> = ({ label, value, icon }) => {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <View>
        <Text variant="label">{label}</Text>
        <Text variant="body">{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  icon: {
    marginRight: 12,
  },
});
