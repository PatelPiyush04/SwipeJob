import React from "react";
import { UserProfile as UserProfileType } from "../../../types/user";
import { View, StyleSheet } from "react-native";
import { ProfileSection } from "./ProfileSection";
import { ProfileHeader } from "./ProfileHeader";
import { Button } from "../../../components/button";

export type ProfileProps = {
  testID?: string;
  profile?: UserProfileType;
  onLogout: () => void;
};

export const UserProfile: React.FC<ProfileProps> = ({
  profile,
  onLogout,
}: ProfileProps) => {
  const contactFields = [
    { label: "Phone", value: profile?.phoneNumber ?? "" },
    { label: "Email", value: profile?.email ?? "" },
  ];

  const locationFields = [
    { label: "Address", value: profile?.address.formattedAddress ?? "" },
    { label: "Time Zone", value: profile?.address.zoneId ?? "" },
    {
      label: "Max Job Distance",
      value: profile?.maxJobDistance ? `${profile.maxJobDistance} miles` : "",
    },
  ];

  const workFields = [{ label: "Worker ID", value: profile?.workerId ?? "" }];

  return (
    <View style={styles.container}>
      <ProfileHeader
        firstName={profile?.firstName ?? ""}
        lastName={profile?.lastName ?? ""}
        email={profile?.email ?? ""}
      />
      <ProfileSection title="Contact Information" fields={contactFields} />
      <ProfileSection title="Location Details" fields={locationFields} />
      <ProfileSection title="Work Information" fields={workFields} />
      <Button title="Log Out" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
