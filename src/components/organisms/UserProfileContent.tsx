import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfileHeader } from '../molecules/ProfileHeader';
import { ProfileSection } from '../molecules/ProfileSection';
import { UserProfile } from '../../types/user';

interface UserProfileContentProps {
  profile: UserProfile;
}

export const UserProfileContent: React.FC<UserProfileContentProps> = ({ profile }) => {
  const contactFields = [
    { label: 'Phone', value: profile.phoneNumber },
    { label: 'Email', value: profile.email },
  ];

  const locationFields = [
    { label: 'Address', value: profile.address.formattedAddress },
    { label: 'Time Zone', value: profile.address.zoneId },
    { label: 'Max Job Distance', value: `${profile.maxJobDistance} miles` },
  ];

  const workFields = [
    { label: 'Worker ID', value: profile.workerId },
  ];

  return (
    <View style={styles.container}>
      <ProfileHeader
        firstName={profile.firstName}
        lastName={profile.lastName}
        email={profile.email}
      />
      <ProfileSection title="Contact Information" fields={contactFields} />
      <ProfileSection title="Location Details" fields={locationFields} />
      <ProfileSection title="Work Information" fields={workFields} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 